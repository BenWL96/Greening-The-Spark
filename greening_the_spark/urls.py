
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('greening_the_spark_api.urls')),
    path('baton/', include('baton.urls')),
    re_path('.*', views.Assets.as_view())
]
