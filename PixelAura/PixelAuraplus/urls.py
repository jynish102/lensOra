from django.urls import path
from PixelAuraplus import views

urlpatterns = [
    
    path('', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('details/', views.details, name='details'),
    path('home/',views.home,name='home'),
    path('sidebar/',views.sidebar,name='sidebar'),
    path('account_sidebar/', views.account_sidebar, name="account_sidebar"),
    path('setting/',views.setting,name='setting'),
    path('base/',views.base,name="base"),
    path('account_center/', views.account_center, name="account_center"),
    path('personal_detail_s/',views.personal_detail_s, name='personal_detail_s'),
    path('personal_detail_ss/',views.personal_detail_ss, name='personal_detail_ss'),
    path('change_pass/', views.change_pass, name='change_pass'),
    path('reels/', views.reels, name='reels'),
    path('profile/', views.profile, name="profile"),
    path('saved/',views.saved, name="saved"),

]
