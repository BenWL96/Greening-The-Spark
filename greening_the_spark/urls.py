from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
   openapi.Info(
      title="GTS API",
      default_version='v1',
      description="Greening the Spark is a model of a system "
                  "for electricity generation, distribution, "
                  "storage and consumption – in short, a typical "
                  "national grid. Originally started as a proof of "
                  "concept and general purpose simulator, it is "
                  "now being developed as a demonstrator for a "
                  "hands-on museum exhibit.",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('gts_admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('greening_the_spark_api.urls')),
    path('baton/', include('baton.urls')),
    re_path(
        r'^swagger(?P<format>\.json|\.yaml)$',
        schema_view.without_ui(cache_timeout=0),
        name='schema-json'
    ),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path('.*', TemplateView.as_view(template_name="index.html"))
]
