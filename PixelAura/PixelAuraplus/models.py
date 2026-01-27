from django.db import models

# Create your models here.

class Register(models.Model):
   
    name = models.CharField(max_length=100,null=False)
    email = models.CharField(max_length=50,null=False)
    mobile = models.CharField(max_length=15,null=False)
    password = models.CharField(max_length=255,null=False)
    birthdate = models.CharField(max_length=255,null=False)
    username = models.CharField(max_length=100,null=False)

    class Meta:
        managed = False          # 🚨 VERY IMPORTANT
        db_table = "register"    # EXACT table name in MySQL

    def __str__(self):
        return self.username
    
class Post(models.Model):
    
    image = models.TextField()
    username = models.CharField(max_length=45)
    caption = models.TextField()

    class Meta:
        db_table = "posts"   # 👈 existing table name
        managed = False     # 👈 VERY IMPORTANT

    def __str__(self):
        return f"{self.username} - Post {self.id}" 


class Profile(models.Model):
    username = models.CharField(max_length=45,null=False)
    bio = models.TextField()
    gender = models.CharField(max_length=10,null=False)
    image = models.TextField()

    class Meta:
        db_table = "profile"   # 👈 existing table name
        managed = False     # 👈 VERY IMPORTANT

    def __str__(self):
        return f"{self.username} - Post {self.gender}" 
    
class Notification(models.Model):
    user_id = models.IntegerField()
    message = models.CharField(max_length=255, null=True, blank=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "notifications"   # exact table name
        managed = False 

    def __str__(self):
        return f"{self.user_id} - Post {self.message}"         

class Comment(models.Model):
    post = models.ForeignKey(
        "Posts",              # model name
        on_delete=models.CASCADE,
        db_column="post_id"   # IMPORTANT
    )

    user = models.ForeignKey(
        "Register",              # model name
        on_delete=models.CASCADE,
        db_column="user_id"   # IMPORTANT
    )

    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "comments"   # exact table name
        managed = False 

    def __str__(self):
        return f"{self.post_id} - Post {self.comment}" 
    

class Follow(models.Model):
    follower_username = models.CharField(max_length=45,null=False)
    following_username = models.CharField(max_length=45,null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "follows"   # exact table name
        managed = False 

    
class Like(models.Model):  
    post = models.ForeignKey(
        "Posts",              # model name
        on_delete=models.CASCADE,
        db_column="post_id"   # IMPORTANT
    )

    user = models.ForeignKey(
        "Register",              # model name
        on_delete=models.CASCADE,
        db_column="user_id"   # IMPORTANT
    )  

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "likes"   # exact table name
        managed = False 

    def __str__(self):
        return f"{self.post_id} - Post {self.user_id}"         

