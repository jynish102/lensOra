from django.shortcuts import render,redirect
from django.db import connection
from django.conf import settings
import os
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

def login(request):
    if "user" in request.session:
        return redirect('home')
    if request.method == 'POST':
        un = request.POST.get('username')
        pw = request.POST.get('password')
        with connection.cursor() as cursor:
            query = "select * from register where username=%s and password=%s"
            cursor.execute(query,[un,pw])
            data = cursor.fetchone()
            if data:
                request.session['user'] = data[6]
                return redirect('home')
            else:
                return redirect('login')
    return render(request,'login.html')

def register(request):
    if request.method == 'POST':
        nm = request.POST.get('name')
        em = request.POST.get('email')
        mb = request.POST.get('mobile')
        pw = request.POST.get('password')
        dob = request.POST.get('birthdate')
        un = request.POST.get('username')
        with connection.cursor() as cursor:
            query ="insert into register (name,email,mobile,password,birthdate,username) values(%s,%s,%s,%s,%s,%s)"
            cursor.execute(query,[nm, em, mb, pw, dob, un])
            return redirect('login')
    return render(request,'register.html')

def details(request):
    return render(request,'more_detail.html')   

def home(request):
    
    login_user = getloginuserdt(request)
    login_profile = profiledata(request)
    login_username = login_user[0]["username"]



    if "user" not in request.session:
        return redirect('login')
    
    username=request.session.get("user")
    with connection.cursor() as cursor:
        q = "select * from register where username=%s"
        cursor.execute(q,[username])
        
        data = cursor.fetchone()
        datalist = {
                'id' :data[0],
                'name':data[1],
                'email':data[2],
                'password':  data[3],
                'mobile':  data[4],
                'birthdate':data[5],
                'username': data[6]
        }

         # 🔹 Suggested users
        cursor.execute("""
            SELECT id, username
            FROM register
            WHERE username != %s
        """, [username])
        users = cursor.fetchall()


        # 🔹 Profile images (NO JOIN)
        cursor.execute("""
            SELECT username, image
            FROM profile
            WHERE username != %s
        """,[username])
        profiles = dict(cursor.fetchall())

        suggested_users = []
        for uid, uname in users:
            img = profiles.get(uname)

            if img:
                img = "" + img

            suggested_users.append({
                "id": uid,
                "username": uname,
                "image": img  # match by username
            })
            
            #postst dynamic
            login_username = login_user[0]["username"]
        cursor.execute("""
            SELECT 
                posts.image,
                
                posts.username,
                profile.image AS profile_image
            FROM posts
            LEFT JOIN profile ON posts.username = profile.username
            WHERE posts.username != %s
            ORDER BY posts.id DESC
            LIMIT 10
        """, [login_username])

        rows = cursor.fetchall()
            
    suggested_posts = []
    for row in rows:
        suggested_posts.append({
            "image": row[0],
            "username": row[1],
            "profile_image": row[2]
        })    
    
    profile = profiledata(request) 
    return render(request,'home.html', 
                  {'ulist' : suggested_users , 
                   'datas' : datalist, 
                   "profile" : profile,
                   "suggested_posts": suggested_posts,
                   "suser" : login_user,
                   "sp" : login_profile
                   })


def getloginuserdt(request):
    username=request.session.get("user")
    with connection.cursor() as cursor:
        q = "select * from register where username=%s"
        cursor.execute(q,[username])
        data = cursor.fetchall()
        datalist = [{
                'id' :row[0],
                'name':row[1],
                'email':row[2],
                'password':row[3],
                'mobile':  row[4],
                'birthdate':row[5],
                'username': row[6]
            }
            for row in data
            ]
        return datalist 
   



def suggestuser(request):
     username=request.session.get("user")
     with connection.cursor() as cursor:
        q = "select * from register where username!=%s"
        cursor.execute(q,[username])
        data = cursor.fetchall()
        userlist = [{
                'id' :row[0],
                'name':row[1],
                'email':row[2],
                'password':row[3],
                'mobile':  row[4],
                'birthdate':row[5],
                'username': row[6]
            }for row in data]
        return userlist



def sidebar(request):
    profile = profiledata(request) 
    loginu = getloginuserdt(request)
    return render(request,'sidebar.html', {"profile" : profile, "datas" : loginu})

def account_sidebar(request):
    return render(request,'account_sidebar.html')

# def setting(request):
#     loginu = getloginuserdt(request)
#     if request.method == "POST":
#         un = request.session.get('user')
#         bio = request.POST.get("bio")
#         gen  = request.POST.get("gender")
#         pro_img =request.FILES.get("profile_image")
#         pro_image_r_p = None  # IMPORTANT

#         if pro_img :
#             image_path = os.path.join(settings.MEDIA_ROOT, "profile", pro_img.name)
#             os.makedirs(os.path.dirname(image_path), exist_ok=True)
#             with open(image_path,"wb") as f:
#                 for chunk in pro_img.chunks():
#                     f.write(chunk)
#             pro_image_r_p = settings.MEDIA_URL + "profile/" + pro_img.name

#         with connection.cursor() as cursor:
#             q = """
#             insert into profile (username,bio,gender,image) 
#             values (%s, %s, %s, %s)
#             """
#             cursor.execute(q,[un,bio,gen,pro_image_r_p])
#             return redirect("profile")
#     profile = profiledata(request)     
#     return render(request,'setting.html',{'datas' :loginu , "profile" : profile})

def setting(request):
    loginu = getloginuserdt(request)
    un = request.session.get('user')

    if request.method == "POST":
        bio = request.POST.get("bio")
        gen = request.POST.get("gender")
        pro_img = request.FILES.get("profile_image")
        pro_image_r_p = None

        if pro_img:
            image_path = os.path.join(settings.MEDIA_ROOT, "profile", pro_img.name)
            os.makedirs(os.path.dirname(image_path), exist_ok=True)

            with open(image_path, "wb") as f:
                for chunk in pro_img.chunks():
                    f.write(chunk)

            pro_image_r_p = settings.MEDIA_URL + "profile/" + pro_img.name

        with connection.cursor() as cursor:
            # 🔍 Check if profile exists
            cursor.execute(
                "SELECT id FROM profile WHERE username = %s",
                [un]
            )
            existing = cursor.fetchone()

            if existing:
                # ✅ UPDATE
                if pro_image_r_p:
                    cursor.execute("""
                        UPDATE profile
                        SET bio=%s, gender=%s, image=%s
                        WHERE username=%s
                    """, [bio, gen, pro_image_r_p, un])
                else:
                    cursor.execute("""
                        UPDATE profile
                        SET bio=%s, gender=%s
                        WHERE username=%s
                    """, [bio, gen, un])
            else:
                # ✅ INSERT
                cursor.execute("""
                    INSERT INTO profile (username, bio, gender, image)
                    VALUES (%s, %s, %s, %s)
                """, [un, bio, gen, pro_image_r_p])

        return redirect("profile")

    # GET request
    profile = profiledata(request)   # should return None if not exists
    return render(
        request,
        'setting.html',
        {
            'datas': loginu,
            'profile': profile
        }
    )


def base(request):
    return render(request,'base.html')  

def account_center(request):
    return render(request, 'account_center.html')

def personal_detail_s(request):
    username = request.session.get('user')
    loginu = getloginuserdt(request)
    profile = profiledata(request) 

    if request.method == "POST":
        uname = request.POST.get("username")
        email = request.POST.get("email")
        mobile = request.POST.get("phone")
        dob = request.POST.get("dob")

        with connection.cursor() as cursor:
            cursor.execute(
                """
                UPDATE register
                SET  email=%s, 
                    mobile=%s,
                    birthdate=%s,
                    username=%s
                WHERE username=%s
                """,
                [email,mobile,dob,uname,username]
            )

        messages.success(request, "Profile updated successfully")
        return redirect("personal_detail_s")
    return render(request,"personal_detail_s.html",{'username' : username, 'datas' :loginu , "profile" : profile})

def change_pass(request):
    if "user" not in request.session:
        return redirect('login')

    username = request.session.get("user")
    profile = profiledata(request)

    if request.method == "POST":
        current = request.POST.get("crntpwd")
        new = request.POST.get("npwd")
        confirm = request.POST.get("cnfmpwd")

        # 1️⃣ Password match check
        if new != confirm:
            messages.error(request, "New passwords do not match")
            return redirect("change_pass")
        
        current_hashed = current
        new_hashed = new


        with connection.cursor() as cursor:
            # 2️⃣ Verify current password
            cursor.execute(
                "SELECT id FROM register WHERE username=%s AND password=%s",
                [username, current_hashed]
            )
            user = cursor.fetchone()

            if not user:
                messages.error(request, "Current password is incorrect")
                return redirect("change_pass")

            # 3️⃣ Update password
            cursor.execute(
                "UPDATE register SET password=%s WHERE username=%s",
                [new_hashed, username]
            )

        messages.success(request, "Password changed successfully")
        return redirect("change_pass")
    return render(
        request,
        "change_pass.html",
        {
            "profile": profile,
            "username": username
        }
    )

def personal_detail_ss(request):
    loginu = getloginuserdt(request)
    return render (request,"personal_detail_ss.html",{'datas' :loginu})

def reels(request):
    profile = profiledata(request)
    return render(request,"reels.html" , {"profile" : profile})

def profile(request):
    if 'user' not in request.session:
        return redirect('login')
    
    username=request.session.get("user")
        
   
    loginu = getloginuserdt(request)
    posts=viewpost(request)

    profile = profiledata(request) 
    
    with connection.cursor() as cursor:

        # POSTS
        cursor.execute("""
            SELECT id, image, caption
            FROM posts
            WHERE username = %s
        """, [username])
        posts = cursor.fetchall()
        post_count = len(posts)

        # FOLLOWERS COUNT
        cursor.execute("""
            SELECT COUNT(*)
            FROM follows
            WHERE following_username = %s
        """, [username])
        followers_count = cursor.fetchone()[0]

        # FOLLOWING COUNT
        cursor.execute("""
            SELECT COUNT(*)
            FROM follows
            WHERE follower_username = %s
        """, [username])
        following_count = cursor.fetchone()[0]

        
    
    return render(request,"profile.html",
                  {'userlogin' :loginu, 
                   "posts": posts , 
                   "profile": profile, 
                   "post_count" : post_count,
                   "following_count" : following_count,
                   "followers_count" : followers_count})


def profiledata(request):
    username = request.session.get('user')
    profile_data = {
        'username': username,
        'bio': '',
        'gender': '',
        'image': None
    }
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT username, bio, gender, image
            FROM profile
            WHERE username = %s
        """, [username])

        row = cursor.fetchone()

        if row:
            profile_data = {
                'username': row[0],
                'bio': row[1],
                'gender': row[2],
                'image': row[3],
            }
        return profile_data    


def saved(request):
    return render(request,"saved.html")




def suggested_profile(request, username):
    if "user" not in request.session:
        return redirect("login")
    
    logged_user = request.session["user"]
    
    with connection.cursor() as cursor:

        # USER
        cursor.execute("""
            SELECT id, username
            FROM register
            WHERE username = %s
        """, [username])
        user_row = cursor.fetchone()

        if not user_row:
            return redirect("home")

        user = {
            "id": user_row[0],
            "username": user_row[1],
        }

        # PROFILE
        cursor.execute("""
            SELECT bio, image
            FROM profile
            WHERE username = %s
        """, [username])
        profile_row = cursor.fetchone()

        profile = {
            "bio": profile_row[0] if profile_row else "",
            "image": profile_row[1] if profile_row else None,
        }


        # POSTS
        cursor.execute("""
            SELECT id,image
            FROM posts
            WHERE username = %s
            ORDER BY id DESC
        """, [username])
        posts = cursor.fetchall()
        post_count = len(posts)


         # ✅ CHECK FOLLOW STATUS
        cursor.execute("""
            SELECT id FROM follows
            WHERE follower_username=%s AND following_username=%s
        """, [logged_user, username])

        is_following = cursor.fetchone() is not None
     
        cursor.execute("""
            SELECT id FROM follows 
            WHERE follower_username=%s AND following_username=%s
        """, [username, logged_user])
        follows_you = cursor.fetchone() is not None

         # FOLLOWERS COUNT
        cursor.execute("""
            SELECT COUNT(*)
            FROM follows
            WHERE following_username = %s
        """, [username])
        followers_count = cursor.fetchone()[0]

        # FOLLOWING COUNT
        cursor.execute("""
            SELECT COUNT(*)
            FROM follows
            WHERE follower_username = %s
        """, [username])
        following_count = cursor.fetchone()[0]


    return render(request, "suggested_profile.html", {
        "user": user,
        "profile": profile,
        "posts": posts,
        "is_following" : is_following,
        "follows_you":follows_you,
        "post_count" : post_count,
        "followers_count" : followers_count,
        "following_count" : following_count
        
    })






def suggested_user_profile(request, username):
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT id, name, email, username  FROM register WHERE username = %s",
            [username]
        )
        row = cursor.fetchone()

    if not row:
        return HttpResponse("User not found")

    user = {
        'id': row[0],
        'name': row[1],
        'email': row[2],
        'username': row[3],
    }

    return render(request, 'suggested_profile.html', {'user': user})


# def add_post(request):
#     if request.method =="POST" :
#         img = request.FILES.get('image')
#         un = request.session.get('user')
#         cp = request.POST.get("txtarea")
#         if img :
#             image_path = os.path.join(settings.MEDIA_ROOT, "posts", img.name)
#             os.makedirs(os.path.dirname(image_path), exist_ok=True)
#             with open(image_path,"wb") as f:
#                 for chunk in img.chunks():
#                     f.write(chunk)
#             image_r_p = "/PixelAuraplus/static/images/posts/" +img.name

#         with connection.cursor() as cursor:
#             q = "insert into posts (image,username,caption) values (%s,%s, %s)"   
#             cursor.execute(q,[image_r_p,un,cp])    
#             return redirect('home') 
#     return render(request,"login.html") 

def add_post(request):
    if request.method == "POST":
        img = request.FILES.get('image')
        un = request.session.get('user')
        cp = request.POST.get("txtarea")

        if not img:
            # user clicked discard OR tried to submit without image
            return redirect('home')

        if img:
            image_path = os.path.join(settings.MEDIA_ROOT, "posts", img.name)
            os.makedirs(os.path.dirname(image_path), exist_ok=True)

            with open(image_path, "wb") as f:
                for chunk in img.chunks():
                    f.write(chunk)

            image_r_p = settings.MEDIA_URL + "posts/" + img.name
       
        with connection.cursor() as cursor:
                q = """
                INSERT INTO posts (image, username, caption)
                VALUES (%s, %s, %s)
                """
                cursor.execute(q, [image_r_p, un, cp])

        return redirect('home')

    return render(request, "login.html")

def viewpost(request):
    username = request.session.get('user')

    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT id, image, username, caption
            FROM posts
            WHERE username = %s
            ORDER BY id DESC
        """, [username])
        posts = cursor.fetchall()

    return posts


def edit_post(request,id):
    if request.method == 'POST':
        
        cp = request.POST.get("txtarea")

        
        with connection.cursor() as cursor:
            q="update posts set caption=%s where id=%s"
            cursor.execute(q,[cp,id])
            data = cursor.fetchone()
            post={
                'id':data[0],
                'caption' : [3]
                
            }
        return render(request, 'profile.html', {'post':post})



def viewprofile(request):
    username = request.session.get('user')

    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT id,username,bio,gender,image
            FROM profile
            WHERE username = %s
        """, [username])
        profile = cursor.fetchall()

    return render(request, "profile.html", {
        "profile": profile
    })

def notifications(request):
    if "user" not in request.session:
        return redirect("login")

    logged_user = request.session["user"]  # username

    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT 
                f.follower_username,
                p.image,
                f.created_at
            FROM follows f
            LEFT JOIN profile p 
                ON p.username = f.follower_username
            WHERE f.following_username = %s
            ORDER BY f.created_at DESC
        """, [logged_user])

        notifications = cursor.fetchall()

    return render(request, "notifications.html", {
        "notifications": notifications
    })

def follow_user(request, username):
    if "user" not in request.session:
        return redirect("login")

    follower = request.session["user"]    # username
    follower_id = request.session["user"][0]   # id

    if follower == username:
        return redirect("suggested_user_profile", username=username)

    with connection.cursor() as cursor:

        # check already following
        cursor.execute("""
            SELECT id FROM follows
            WHERE follower_username=%s AND following_username=%s
        """, [follower, username])

        if cursor.fetchone():
            # UNFOLLOW
            cursor.execute("""
                DELETE FROM follows
                WHERE follower_username=%s AND following_username=%s
            """, [follower, username])

        else:
            # FOLLOW
            cursor.execute("""
                INSERT INTO follows (follower_username, following_username)
                VALUES (%s, %s)
            """, [follower, username])

            # 🔔 GET FOLLOWED USER ID
            cursor.execute("""
                SELECT id FROM register WHERE username=%s
            """, [username])

            followed_user = cursor.fetchone()

            if followed_user:
                followed_user_id = followed_user[0]

                # 🔔 INSERT NOTIFICATION HERE ✅
                cursor.execute("""
                    INSERT INTO notifications (user_id, message)
                    VALUES (%s, %s)
                """, [
                    followed_user_id,
                    f"{follower} started following you"
                ])

    return redirect("suggested_user_profile", username=username)


def add_comment(request):
    if request.method != "POST":
        return redirect("home")

    if "user" not in request.session:
        return redirect("login")

    post_id = request.POST.get("post_id")
    comment = request.POST.get("comment")
    username = request.session.get("user")

    print("POST_ID:", post_id)
    print("COMMENT:", comment)
    print(username)

    if not post_id or not comment:
        print("❌ Missing post_id or comment")
        return redirect(request.META.get("HTTP_REFERER"))

    with connection.cursor() as cursor:

        cursor.execute(
            "SELECT id FROM register WHERE username=%s",
            [username]
        )
        user = cursor.fetchone()

        if not user:
            print("❌ User not found")
            return redirect(request.META.get("HTTP_REFERER"))

        user_id = user[0]
        

        cursor.execute(
            """
            INSERT INTO comments (post_id, user_id, comment)
            VALUES (%s, %s, %s)
            """,
            [int(post_id), user_id, comment]
        )

        print("✅ COMMENT INSERTED")

    return redirect(request.META.get("HTTP_REFERER"))

def post_crud(request):
    if 'user' not in request.session:
        return redirect('login')
    username = request.session['user']

    
    posts = viewpost(request)

    profile = profiledata(request)
       
    
    return render(request,"post_crud.html",{'username' :username, 'posts':posts, 'profile' : profile})

def delete_post(request, post_id):
    username = request.session.get('user')

    with connection.cursor() as cursor:
        cursor.execute(
            "DELETE FROM posts WHERE id=%s AND username=%s",
            [post_id, username]
        )

    return redirect('profile')

def update_post(request):
    if request.method == "POST":
        post_id = request.POST.get('post_id')
        caption = request.POST.get('caption')
        username = request.session.get('user')

        with connection.cursor() as cursor:
            cursor.execute(
                "UPDATE posts SET caption=%s WHERE id=%s AND username=%s",
                [caption, post_id, username]
            )

    return redirect('post_crud')

            
                




def logout(request):
    if "user" in request.session:
        request.session.flush()
        return redirect("login")
