#from django.contrib import admin
#coding = utf-8
from Jeapedu.models import *
import xadmin
from xadmin.views.base import CommAdminView


# class Course_admin(admin.ModelAdmin):
#     list_display =('photo_tag','title','startdate',)
#
# class Teachers_admin(admin.ModelAdmin):
#     list_display =('photo_tag','name','kw',)
#
# class Students_admin(admin.ModelAdmin):
#     list_display =('photo_tag','name','kw',)
#
# class News_admin(admin.ModelAdmin):
#     list_display =('photo_tag','title',)
#
# class Enterprise_admin(admin.ModelAdmin):
#     list_display =('photo_tag','name',)

# admin.site.register(Course,Course_admin)
# admin.site.register(Teachers,Teachers_admin)
# admin.site.register(Students,Students_admin)
# admin.site.register(News,News_admin)
# admin.site.register(Enterprise,Enterprise_admin)
class Course_admin(object):
    list_display =('title','startdate',)

class Teachers_admin(object):
    list_display =('name','kw',)

class Students_admin(object):
    list_display =('name','kw',)

class News_admin(object):
    list_display =('photo','title',)

class Enterprise_admin(object):
    list_display =('photo','name',)

class GlobalSetting(object):
    site_title  = "JEAP MANAGE"

    site_footer = "JEAP MANAGE"


xadmin.site.register(CommAdminView,GlobalSetting)
xadmin.site.register(Teachers,Teachers_admin)
xadmin.site.register(Course,Course_admin)
xadmin.site.register(Students,Students_admin)
xadmin.site.register(News,News_admin)
xadmin.site.register(Enterprise,Enterprise_admin)
