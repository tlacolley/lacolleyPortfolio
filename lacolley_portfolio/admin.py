from django.contrib import admin

# Register your models here.
from .models import *
# from myproject.myapp.models import Author

class WebWorkAdmin(admin.ModelAdmin):
    fields = ('name', 'description','img', 'link')
    list_display = ('name', 'description')
admin.site.register(WebWork, WebWorkAdmin)


class VFXWorkAdmin(admin.ModelAdmin):
    fields = ('name', 'description', 'category', 'img', 'video_link')
    list_display = ('first_name', 'last_name')
    list_display = ('name', 'category', 'description')
admin.site.register(VFXWork, VFXWorkAdmin)

