from django.db import models

class Course(models.Model):
	title     = models.CharField(max_length=128)
	order     = models.IntegerField(default=0)
	startdate = models.CharField(max_length=64)
	content   = models.TextField()
	photo     = models.ImageField(upload_to='couese_photo',blank=True,null=True)
	kw		  = models.CharField(max_length=64,default="open")
	# def photo_tag(self):
	# 	if self.photo.name[0] == '/':
	# 		return u'<img src="%s" />' % self.photo
	# 	return u'<img style="width:50px;"src="/media/%s" />' % self.photo
	# photo_tag.short_description = 'Image'
	# photo_tag.allow_tags = True

class Teachers(models.Model):
	name         = models.CharField(max_length=64)	
	order        = models.IntegerField(default=0)
	introduction = models.TextField()
	photo        = models.ImageField(upload_to='teachers_photo',blank=True,null=True)
	kw		     = models.CharField(max_length=64,default="open")
	# def photo_tag(self):
	# 	if self.photo.name[0] == '/':
	# 		return u'<img src="%s" />' % self.photo
	# 	return u'<img style="width:50px;"src="/media/%s" />' % self.photo
	# photo_tag.short_description = 'Image'
	# photo_tag.allow_tags = True
	
class Students(models.Model):
	name         = models.CharField(max_length=64)
	order        = models.IntegerField(default=0)
	introduction = models.TextField()
	photo        = models.ImageField(upload_to='students_photo',blank=True,null=True)
	kw		     = models.CharField(max_length=64,default="open")
	# def photo_tag(self):
	# 	if self.photo.name[0] == '/':
	# 		return u'<img src="%s" />' % self.photo
	# 	return u'<img style="width:50px;"src="/media/%s" />' % self.photo
	# photo_tag.short_description = 'Image'
	# photo_tag.allow_tags = True
	
class News(models.Model):
	title   = models.CharField(max_length=128)
	order   = models.IntegerField(default=0)
	content = models.TextField()
	photo   = models.ImageField(upload_to='news_photo',blank=True,null=True)
	kw	    = models.CharField(max_length=64,default="open")
	# def photo_tag(self):
	# 	if self.photo.name[0] == '/':
	# 		return u'<img src="%s" />' % self.photo
	# 	return u'<img style="width:50px;"src="/media/%s" />' % self.photo
	# photo_tag.short_description = 'Image'
	# photo_tag.allow_tags = True
	
class Enterprise(models.Model):
	name    = models.CharField(max_length=128)
	order   = models.IntegerField(default=0)
	content = models.TextField()
	photo   = models.ImageField(upload_to='enterprise_photo',blank=True,null=True)
	kw	    = models.CharField(max_length=64,default="open")
	# def photo_tag(self):
	# 	if self.photo.name[0] == '/':
	# 		return u'<img src="%s" />' % self.photo
	# 	return u'<img style="width:50px;"src="/media/%s" />' % self.photo
	# photo_tag.short_description = 'Image'
	# photo_tag.allow_tags = True

##########################################################################################################

class TextInfo(models.Model):
    text       = models.TextField()
    tagname    = models.CharField(max_length=64)


class ImgInfo(models.Model):
    image      = models.ImageField(upload_to='./image')
    tagname    = models.CharField(max_length=64)
	
	
	
	
	