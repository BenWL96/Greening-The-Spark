from rest_framework import serializers

from . import models


class SerializeSimulation_Reports_LIST(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		fields = ['game_id', 'date']

class SerializeSimulation_Report_DATACHECK(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		exclude = ['game_id']

class Serialize_Field_Related_Info(serializers.ModelSerializer):
	class Meta:
		model = models.Field_Related_Info
		exclude = ['id']

class SerializeSimulation_Report_Detail(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		fields = '__all__'

class Serialize_Information_Panel(serializers.ModelSerializer):
	class Meta:
		model = models.Info_Panel_Questions_And_Answers
		fields = "__all__"

class Serialize_Three_Dimensional_Models(serializers.ModelSerializer):
	class Meta:
		model = models.Three_Dimensional_Model
		fields = "__all__"
