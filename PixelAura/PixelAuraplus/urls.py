from django.urls import path
from PixelAuraplus import views

urlpatterns = [
    
    path('',views.login,name='login'),
    path('register/',views.register,name='register'),
    path('details/',views.details,name='details'),
    path('home/',views.home,name='home'),
    path('sidebar/',views.sidebar,name='sidebar'),
    path('footer/',views.footer,name='footer'),
]
