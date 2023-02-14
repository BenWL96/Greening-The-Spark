from django.urls import path
from . import views


urlpatterns = [
    path('', views.apiOverview, name="api overview"),
    path('sim-reports/', views.Simulation_Reports_LIST, name="simulation-reports"),
    path('sim-reports/<int:game_id>/details/', views.Simulation_Reports_DETAIL, name="simulation-report-detail"),
    path('sim-reports/dump/', views.Simulation_Reports_CREATE, name="simulation-report-create"),
    path('information-panel/', views.Information_Panel_List_GET, name="information-panel-list-get"),
    path('models/', views.Three_Dimensional_Model_List_GET, name="model-list-get")
]