from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os
from .models import *
from django.shortcuts import get_object_or_404
from .models import Resume

def Home(request):
    links=list(Link.objects.all())
    about=About.objects.all()[0]
    types=list(Type.objects.all())
    skills=list(Skill.objects.all())
    projects=list(Project.objects.all())
    experiences=list(Experience.objects.all())
    achievements=list(Achivement.objects.all())
    educations=list(Education.objects.all())
    extras=list(Extracurricular.objects.all())
    context={
        'links':links,
        'about':about,
        'types':types,
        'skills':skills,
        'projects':projects,
        'experiences':experiences,
        'achievements':achievements,
        'edus':educations,
        'extras':extras
    }
    return render(request,'peash/home.html',context)

def download_resume(request):
    resume = list(Resume.objects.all())[-1]
    cv_file = resume.cv
    response = HttpResponse(cv_file, content_type='application/octet-stream')
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(cv_file.name)
    return response