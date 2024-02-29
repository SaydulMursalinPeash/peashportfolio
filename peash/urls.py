from django.urls import path,include
from .views import *
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('',Home,name='home_page'),
    path('resume/download/',download_resume,name="download_resume"),
]
urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)