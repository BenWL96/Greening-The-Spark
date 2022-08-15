from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.apiOverview, name="api overview"),
    path('sim-reports/', views.Simulation_Reports_LIST, name="simulation-reports"),
    path('sim-reports/<int:simulation_id>/details/', views.Simulation_Reports_DETAIL, name="simulation-report-detail"),
    path('sim-reports/dump/', views.Simulation_Reports_CREATE, name="simulation-report-create")

]