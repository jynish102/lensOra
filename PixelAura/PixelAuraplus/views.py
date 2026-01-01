from django.shortcuts import render,redirect
from django.db import connection
from django.http import HttpResponse
from django.conf import settings
import os

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
    profile = profiledata(request) 
    return render(request,'home.html', {'ulist' : suggested_users , 'datas' : datalist, "profile" : profile})

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
    return render(request,'sidebar.html', {"profile" : profile})

def account_sidebar(request):
    return render(request,'account_sidebar.html')

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
    loginu = getloginuserdt(request)
    profile = profiledata(request) 
    return render(request,"personal_detail_s.html",{'datas' :loginu , "profile" : profile})

def change_pass(request):
    return render(request,'change_pass.html')

def personal_detail_ss(request):
    loginu = getloginuserdt(request)
    return render (request,"personal_detail_ss.html",{'datas' :loginu})

def reels(request):
    profile = profiledata(request)
    return render(request,"reels.html" , {"profile" : profile})

def profile(request):
    if 'user' not in request.session:
        return redirect('login')
   
    loginu = getloginuserdt(request)
    posts=viewpost(request)

    profile = profiledata(request)  
    return render(request,"profile.html",{'userlogin' :loginu, "posts": posts , "profile": profile})


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
            SELECT image
            FROM posts
            WHERE username = %s
            ORDER BY id DESC
        """, [username])
        posts = cursor.fetchall()

    return render(request, "suggested_profile.html", {
        "user": user,
        "profile": profile,
        "posts": posts,
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
#             image_r_p = "PixelAuraplus/static/images/posts/" +img.name

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



def logout(request):
    if "user" in request.session:
        request.session.flush()
        return redirect("login")
