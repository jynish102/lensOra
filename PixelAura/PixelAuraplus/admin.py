from django.contrib import admin
from .models import *

# Register your models here.
class NoEditAdmin(admin.ModelAdmin):

    def has_change_permission(self, request, obj=None):
        return False   # prevent editing

    def has_add_permission(self, request):
        return False   # prevent adding


admin.site.register(Register,NoEditAdmin)
admin.site.register(Posts,NoEditAdmin)
admin.site.register(Profile,NoEditAdmin)
admin.site.register(Notification,NoEditAdmin)
admin.site.register(Comment,NoEditAdmin)
admin.site.register(Follow,NoEditAdmin)
admin.site.register(Like,NoEditAdmin)
