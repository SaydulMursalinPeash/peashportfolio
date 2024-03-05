from django.db import models


class About(models.Model):
    name=models.CharField(max_length=200,null=False,blank=False)
    short_des=models.TextField(max_length=500,null=False,blank=False)
    des=models.TextField(max_length=1500,null=True)
    canv_img=models.ImageField(upload_to='peash/')
    pro_img=models.ImageField(upload_to='peash/')

    def __str__(self):
        return self.name
class Type(models.Model):
    name=models.CharField(max_length=200,null=False)
    icon=models.ImageField(upload_to='types/')
    link=models.CharField(max_length=50,null=False)
    def __str__(self):
        return self.name
    
class Link(models.Model):
    link_name=models.CharField(null=False,blank=False,max_length=200)
    link_address=models.URLField(null=False,blank=False)
    link_icon=models.ImageField(null=False,blank=False,upload_to='links/')

    def __str__(self):
        return self.link_name

class Skill(models.Model):
    skill_name=models.CharField(max_length=200,null=False,blank=False)
    skill_type=models.ForeignKey(Type,null=False,on_delete=models.CASCADE,related_name='skill_type')
    skill_description=models.TextField(max_length=1000,null=False,blank=False)
    level=models.CharField(max_length=50,null=True)
    skill_icon=models.ImageField(null=False,blank=False,upload_to='skills/')
    def __str__(self):
        return self.skill_name
    

class Project(models.Model):
    project_name=models.CharField(max_length=200,blank=False,null=False)
    project_type=models.ForeignKey(Type,on_delete=models.CASCADE,related_name="project_type")
    short_description=models.TextField(max_length=500,null=False,blank=False)
    description=models.TextField(max_length=2000,null=False,blank=False)
    icon=models.ImageField(null=False,blank=False,upload_to='projects/',default='projects/default.png')
    year=models.CharField(max_length=50,null=False,blank=False)
    def __str__(self):
        return '('+self.project_type.name+') '+self.project_name
    
class RepoDest(models.Model):
    name=models.CharField(max_length=100)
    icon=models.ImageField(upload_to='links/',null=True)
    def __str__(self):
        return self.name
class Repo(models.Model):
    repo_dest=models.ForeignKey(RepoDest,on_delete=models.CASCADE,related_name='repo_dest_repo')
    project=models.ForeignKey(Project,on_delete=models.CASCADE,related_name='repo_project')
    link=models.URLField(null=False,blank=False)
    
    def __str__(self):
        return self.project.project_name + ' ('+self.repo_dest.name+') '
class ExtraImage(models.Model):
    project=models.ForeignKey(Project,on_delete=models.CASCADE,related_name='image_project',null=True)
    image=models.ImageField(upload_to='projects/',null=True)
    def __str__(self):
        return self.project.project_name+'('+str(self.id)+')'
    
class Tool(models.Model):
    name=models.CharField(max_length=150)
    project=models.ForeignKey(Project,on_delete=models.CASCADE,related_name='tool_project')
    def __str__(self):
        return self.name+' ('+self.project.project_name +')'

class Achivement(models.Model):
    name=models.CharField(max_length=200,null=False,blank=False)
    ach_from=models.CharField(max_length=200)
    year=models.CharField(max_length=50)
    description=models.TextField(max_length=1500)
    image=models.ImageField(upload_to='achievements/')
    def __str__(self):
        return self.name + '('+self.ach_from+')'


class Experience(models.Model):
    name=models.CharField(max_length=200)
    type=models.CharField(max_length=200)
    duration=models.CharField(max_length=200)
    description=models.TextField(max_length=1500,null=True)
    image=models.ImageField(upload_to='experiences/')
    def __str__(self):
        return self.name+'('+self.type+', '+self.duration+')'

class Education(models.Model):
    name=models.CharField(max_length=400,null=False,blank=False)
    edu_from=models.CharField(max_length=400,null=False,blank=False)
    year=models.CharField(max_length=400,null=False,blank=False)
    logo=models.ImageField(upload_to='edu/')
    def __str__(self):
        return self.name

class Extracurricular(models.Model):
    post_name=models.CharField(max_length=400,null=False,blank=False)
    org_name=models.CharField(max_length=400,null=False,blank=False)
    year=models.CharField(max_length=400,null=False,blank=False)
    logo=models.ImageField(upload_to='edu/')
    def __str__(self):
        return self.org_name
    
class Resume(models.Model):
    name=models.CharField(max_length=100)
    cv=models.FileField(upload_to='peash/')
    def __str__(self):
        return self.name