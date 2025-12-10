from django.shortcuts import render,redirect
from django.db import connection

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
    return render(request,'home.html')

def sidebar(request):
    return render(request,'sidebar.html')

def account_sidebar(request):
    return render(request,'account_sidebar.html')

def setting(request):
    return render(request,'setting.html')  

def base(request):
    return render(request,'base.html')  

def account_center(request):
    return render(request, 'account_center.html')

def personal_detail_s(request):
    return render(request,"personal_detail_s.html")

def change_pass(request):
    return render(request,'change_pass.html')

def personal_detail_ss(request):
    return render (request,"personal_detail_ss.html")
