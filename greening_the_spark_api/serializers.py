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

class Serialize_Field_Related_Info(serializers.ModelSerializer):
	class Meta:
		model = models.Field_Related_Info
		exclude = ['id']

class SerializeSimulation_Report_Detail(serializers.ModelSerializer):
	class Meta:
		model = models.Simulation_Report
		fields = '__all__'



class Serialize_Information_Panel_Answers(serializers.ModelSerializer):

	class Meta:
		model = models.Info_Panel_Answers
		exclude = ["answer_id", 'question']


class Serialize_Information_Panel_Questions(serializers.ModelSerializer):
	answers = Serialize_Information_Panel_Answers(read_only=True, source="info_panel_answers")

	class Meta:
		model = models.Info_Panel_Questions
		fields = ["question_id", "question", "answers"]

