from django.contrib import admin
from .models import Course,Teachers,Students,News,Enterprise,TextInfo,ImgInfo,Head,Content,Work,Ours
class CourseInfoAdmin(admin.ModelAdmin):
	list_display = ("title",)
	class Media:
		js=("/static/js/jquery-1.8.0.min.js",
			"/static/tinymce/js/tinymce/jquery.tinymce.min.js",
			"/static/tinymce/js/tinymce/tinymce.min.js",
			"/static/js/tinymce.js")
class TeachersInfoAdmin(admin.ModelAdmin):
	list_display = ("name",)
class StudentsInfoAdmin(admin.ModelAdmin):
	list_display = ("name",)
class NewsInfoAdmin(admin.ModelAdmin):
	list_display = ("title",)
	class Media:
		js=("/static/js/jquery-1.8.0.min.js",
			"/static/tinymce/js/tinymce/jquery.tinymce.min.js",
			"/static/tinymce/js/tinymce/tinymce.min.js",
			"/static/js/tinymce.js")
class EnterpriseInfoAdmin(admin.ModelAdmin):
	list_display = ("name",)
class TextInfoAdmin(admin.ModelAdmin):
	list_display = ("text",)
class ImgInfoAdmin(admin.ModelAdmin):
	list_display = ("image",)
class HeadInfoAdmin(admin.ModelAdmin):
	list_display = ("title",)
class ContentInfoAdmin(admin.ModelAdmin):
	list_display = ("title",)
	class Media:
		js=("/static/js/jquery-1.8.0.min.js",
			"/static/tinymce/js/tinymce/jquery.tinymce.min.js",
			"/static/tinymce/js/tinymce/tinymce.min.js",
			"/static/js/tinymce.js")
class WorkInfoAdmin(admin.ModelAdmin):
	list_display = ("name",)
class OursInfoAdmin(admin.ModelAdmin):
	list_display = ("id",)
	class Media:
		js=("/static/js/jquery-1.8.0.min.js",
			"/static/tinymce/js/tinymce/jquery.tinymce.min.js",
			"/static/tinymce/js/tinymce/tinymce.min.js",
			"/static/js/tinymce.js")
admin.site.register(Course,CourseInfoAdmin)
admin.site.register(Teachers,TeachersInfoAdmin)
admin.site.register(Students,StudentsInfoAdmin)
admin.site.register(News,NewsInfoAdmin)
admin.site.register(Enterprise,EnterpriseInfoAdmin)
admin.site.register(TextInfo,TextInfoAdmin)
admin.site.register(ImgInfo,ImgInfoAdmin)
admin.site.register(Head,HeadInfoAdmin)
admin.site.register(Content,ContentInfoAdmin)
admin.site.register(Work,WorkInfoAdmin)
admin.site.register(Ours,OursInfoAdmin)
