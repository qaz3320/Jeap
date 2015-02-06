from django.db import models

class Course(models.Model):
	title     = models.CharField(max_length=128)
	order     = models.IntegerField(default=0)
	startdate = models.CharField(max_length=64)
	content   = models.TextField()
	photo     = models.ImageField(upload_to='./image',blank=True,null=True)
	kw		  = models.CharField(max_length=64,default="open")


class Teachers(models.Model):
	name         = models.CharField(max_length=64)	
	order        = models.IntegerField(default=0)
	introduction = models.TextField()
	photo        = models.ImageField(upload_to='./image',blank=True,null=True)
	kw		     = models.CharField(max_length=64,default="open")
	
class Students(models.Model):
	name         = models.CharField(max_length=64)
	order        = models.IntegerField(default=0)
	introduction = models.TextField()
	photo        = models.ImageField(upload_to='./image',blank=True,null=True)
	kw		     = models.CharField(max_length=64,default="open")

	
class News(models.Model):
	title   = models.CharField(max_length=128)
	order   = models.IntegerField(default=0)
	content = models.TextField()
	photo   = models.ImageField(upload_to='./image',blank=True,null=True)
	kw	    = models.CharField(max_length=64,default="open")

class Enterprise(models.Model):
	name    = models.CharField(max_length=128)
	order   = models.IntegerField(default=0)
	content = models.TextField()
	photo   = models.ImageField(upload_to='./image',blank=True,null=True)
	kw	    = models.CharField(max_length=64,default="open")
class Ours(models.Model):
	title   = models.CharField(max_length=64)
	content = models.TextField()
	img     = models.ImageField(upload_to='./image')



##########################################################################################################


class TextInfo(models.Model):
    text       = models.TextField()
    tagname    = models.CharField(max_length=64)


class ImgInfo(models.Model):
    image      = models.ImageField(upload_to='./image')
    tagname    = models.CharField(max_length=64)
    

class Head(models.Model):
	title = models.CharField(max_length=64)
	link = models.CharField(max_length=64)

class Content(models.Model):
	title = models.CharField(max_length=64)
	link = models.CharField(max_length=64)
	sub = models.TextField()

class Work(models.Model):
	name = models.CharField(max_length=64)
	img = models.ImageField(upload_to='./image')
	link = models.CharField(max_length=64)
class Image(models.Model):
	img  = models.ImageField(upload_to = './img')
	
	
	
	
	
	