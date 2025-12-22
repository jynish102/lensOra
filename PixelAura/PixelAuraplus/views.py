from django.shortcuts import render,redirect
from django.db import connection
from django.conf import settings
import os

def login(request):
    if request.method == 'POST':
        un = request.POST.get('username')
        pw = request.POST.get('password')
        with connection.cursor() as cursor:
            query = "select * from register where username=%s and password=%s"
            cursor.execute(query,[un,pw])
            data = cursor.fetchone()
            if data:
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
    suser=suggestuser(request)
    return render(request,'home.html', {'datas' : datalist,'ulist':suser})

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
                'password':  row[3],
                'mobile':  row[4],
                'birthdate':row[5],
                'username': row[6]
            }for row in data]
        return userlist


def sidebar(request):
    return render(request,'sidebar.html')

def account_sidebar(request):
    return render(request,'account_sidebar.html')

def setting(request):
    loginu = getloginuserdt(request)
    if request.method == "POST":
        un = request.session.get('user')
        bio = request.POST.get("bio")
        gen  = request.POST.get("gender")
        pro_img =request.FILES.get("profile_image")

        if pro_img :
            image_path = os.path.join(settings.MEDIA_ROOT, "profile", pro_img.name)
            os.makedirs(os.path.dirname(image_path), exist_ok=True)
            with open(image_path,"wb") as f:
                for chunk in pro_img.chunks():
                    f.write(chunk)
            pro_image_r_p = "/PixelAuraplus/static/images/profile/" +pro_img.name

        with connection.cursor() as cursor:
            q="insert into profile (username,bio,gender,image) values (%s, %s, %s, %s)"
            cursor.execute(q,[un,bio,gen,pro_image_r_p])
            return redirect("profile")
    return render(request,'setting.html',{'datas' :loginu})
def base(request):
    return render(request,'base.html')  

def account_center(request):
    return render(request, 'account_center.html')

def personal_detail_s(request):
     datalist = getuser(request)
    return render(request,"personal_detail_s.html", {'datas' : loginu})

def change_pass(request):
    return render(request,'change_pass.html')

def personal_detail_ss(request):
   loginu = getloginuserdt(request)
    return render (request,"personal_detail_ss.html", {'datas' : loginu })

def reels(request):
    return render(request,"reels.html")

def profile(request):
    if "user" not in request.session:
        return redirect('login')
    loginu = getloginuserdt(request)
    return render(request,"profile.html", {'userlogin' : loginu })

def saved(request):
    return render(request,"saved.html")

def add_post(request):
    if request.method =="post" :
        img = request.FILES.get('image')
        un = request.session.get('user')
        cp = request.POST.get("txtarea")
        if img :
            image_path = os.path.join(settings.MEDIA_ROOT, "posts", img.name)
            os.makedirs(os.path.dirname(image_path), exist_ok=True)
            with open(image_path,"wb") as f:
                for chunk in img.chunks():
                    f.write(chunk)
            image_r_p = "/PixelAuraPlus/static/images/posts/" +img.name

        with connection.cursor() as cursor:
            q = "insert into posts (image,username,caption) values (%s,%s,%s)"   
            cursor.execute(q,[image_r_p,un,cp])    
            return redirect('home') 
    return render(request,"login.html") 

def viewpost(request):
      username = request.session.get('user')
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT id, image, username, caption
            FROM posts
              WHERE username = %s
            ORDER BY id DESC
        """ , [username])
        posts = cursor.fetchall()

    return posts


    

def logout(request):
    if "user" in request.session:
        request.session.flush()
        return redirect("login")
