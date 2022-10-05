from . import models
from rest_framework import serializers

class SerializeSimulation_Reports_LIST(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		fields = ['game_id', 'date']

class SerializeSimulation_Report_DATACHECK(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		exclude = ['game_id']

class SerializeSimulation_Report_Detail(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		fields = '__all__'

