from django.urls import path
from PixelAuraplus import views

urlpatterns = [
    
    path('', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('details/', views.details, name='details'),
    path('home/',views.home,name='home'),
    path('sidebar/<str:username>/',views.sidebar,name='sidebar'),
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
    path('suggested_profile/<str:username>', views.suggested_profile, name="suggested_profile"),
    path('add_post/', views.add_post,name="add_post"),
    path('profile/<str:username>/' , views.suggested_profile, name="suggested_user_profile"),
    path('notifications/', views.notifications, name='notifications'),
    path('follow/<str:username>/', views.follow_user, name="follow_user"),
    path('post_crud/',views.post_crud, name="post_crud"),
    path('delete-post/<int:post_id>/', views.delete_post,name="delete_post"),
     path('update_post/', views.update_post, name='update_post'),
    path('logout/', views.logout, name="logout"),
]
