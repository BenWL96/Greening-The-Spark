from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Simulation_Report)
admin.site.register(models.Info_Panel_Questions)
admin.site.register(models.Info_Panel_Answers)
admin.site.register(models.Field_Related_Info)