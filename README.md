# lensOra
# final Year MCA sem 4 Company Based Project.
# Project Title : PixelAura+
                 # Technology Stack
# Frontend:
      Html,css, Javascript
      Bootstap
# Backend:
     Python With Django
# Database:
      MysqlworkBench
      
# As per diffrent Operating System command may be different     
# Steps To Set The Project
Use any of code editor.likes vs,pycharm......
1.) Create a virtual environment:
run in terminal: python -m venv myenv

2.) Activate Virtual Env:
run in terminal: myenv\Scripts\activate

3.)Install Django
run in terminal: pip install django (if nedd a specific version of django then at last in command insted of only write django write pip install django==6.0.3)
also visit django Documentaion..........

4.) Check Django Version
python -m django --version

5.)Install Project
run in terminal: django-admin create project projectname
            ex. :  django-admin create project empmngmt
after succesfully create project run you project with python manage.py runserver.
may be port is 127.0.0.1.8000 , see a rocket...

6.) App creation
An App must be in a django project. so change directry as per which os ...
After go to project and activation of virtual environment
run in terminal: python manage.py startapp appname
            ex. : python manage.py startapp emp
this will create a app inside project....
 


# install: mysqlclient,daphne
Daphne is for Run Chat Page In Project.

For Chat I have to use Websocket
# Run Server: Python manage.py runserver
# for Check The First Implerment: daphne PixelAura.asgi:application (Only Chat Page Run With project Also Run  With above manage.py command.)
# for run both Chat and Project  at same time : daphne -p 8000  PixelAura.asgi:application 

# Project Preview
1.) Register
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/1a2cff35-d02c-45df-a501-9e0657e75463" />

2.) Login
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/cadc227d-d559-4b42-987e-4b059a0b7e9c" />

3.) Home
<img width="940" height="474" alt="image" src="https://github.com/user-attachments/assets/609867f1-c2fa-4dfd-89cc-0644f89524cb" />

4.) Reels
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/85d25c08-690b-46cc-aa43-b8c5075680c0" />

5.) Add Post
<img width="940" height="605" alt="image" src="https://github.com/user-attachments/assets/d47e16e7-be46-46da-88ad-8dc2c85edaa5" />





