from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from greening_the_spark.storage_backends import PrivateMediaStorage

RESULTS = (
	('green', 'green'),
	('blue', 'blue'),
	('red', 'red')
)

DIFFICULTIES = (
	('easy', 'easy'),
	('moderate', 'moderate'),
	('hard', 'hard')
)


class Simulation_Report(models.Model):

	game_id = models.AutoField(primary_key=True, unique=True)

	date = models.DateField()
	time = models.TimeField()

	difficulty = models.CharField(max_length=8, choices=DIFFICULTIES)

	demand = models.IntegerField()
	wind = models.IntegerField()
	solar = models.IntegerField()
	fossil_fuels = models.IntegerField()
	nuclear = models.IntegerField()

	fossil_fuels_utilisation = models.IntegerField(
		validators=[
			MinValueValidator(0, message="value has to be above 0"),
			MaxValueValidator(100, message="value has to be below 100.")
		]
	)
	nuclear_utilisation = models.IntegerField(
		validators=[
			MinValueValidator(0, message="value has to be above 0"),
			MaxValueValidator(100, message="value has to be below 100.")
		]
	)

	surplus = models.DecimalField(max_digits=10, decimal_places=2)
	shortfall = models.DecimalField(max_digits=10, decimal_places=2)
	initial_stored = models.IntegerField()
	final_stored = models.IntegerField()
	storage_change = models.IntegerField()

	total_CO2 = models.IntegerField()
	total_cost = models.DecimalField(max_digits=10, decimal_places=2)
	average_CO2 = models.IntegerField()
	average_cost = models.DecimalField(max_digits=10, decimal_places=2)

	# Comments

	surplus_comment = models.CharField(max_length=15)
	shortfall_comment = models.CharField(max_length=15)
	storage_change_comment = models.CharField(max_length=15)
	average_CO2_comment = models.CharField(max_length=15)
	average_cost_comment = models.CharField(max_length=15)

	# Spark Results

	efficiency_spark = models.CharField(choices=RESULTS, max_length=5)
	economy_spark = models.CharField(choices=RESULTS, max_length=5)
	eco_friendliness_spark = models.CharField(choices=RESULTS, max_length=5)

	# All graph related data.

	wind_power_data_values = models.CharField(max_length=300)
	solar_power_data_values = models.CharField(max_length=300)
	demand_power_data_values = models.CharField(max_length=300)

	fossil_fuels_power_data_values = models.CharField(max_length=300)
	nuclear_power_data_values = models.CharField(max_length=300)

	batteries_power_data_values = models.CharField(max_length=300)
	hydro_power_data_values = models.CharField(max_length=300)
	grid_surplus_data_values = models.CharField(max_length=300)

	def __str__(self):
		return "Simulation report " + str(self.game_id)

	class Meta:
		verbose_name = "Simulation Report"
		verbose_name_plural = "Simulation Reports"


class Info_Panel_Questions_And_Answers(models.Model):
	id = models.AutoField(primary_key=True)
	question = models.CharField(unique=True, max_length=255)
	the_simple_answer = models.CharField(max_length=255)
	the_gts_answer = models.CharField(max_length=255)
	the_complex_answer = models.CharField(max_length=255)

	def __str__(self):
		return self.question

	class Meta:
		verbose_name = "Info Panel Q&A"
		verbose_name_plural = "Info Panel Q&A's"


class Field_Related_Info(models.Model):

	#This needs to be a part of every single simulation report..

	id = models.AutoField(primary_key=True)

	demand_info = models.CharField(max_length=200)
	wind_info = models.CharField(max_length=200)
	solar_info = models.CharField(max_length=200)
	fossil_fuels_info = models.CharField(max_length=200)
	nuclear_info = models.CharField(max_length=200)

	fossil_fuels_utilisation_info = models.CharField(max_length=200)
	nuclear_utilisation_info = models.CharField(max_length=200)

	surplus_info = models.CharField(max_length=200)
	shortfall_info = models.CharField(max_length=200)
	initial_stored_info = models.CharField(max_length=200)
	final_stored_info = models.CharField(max_length=200)
	storage_change_info = models.CharField(max_length=200)

	total_CO2_info = models.CharField(max_length=200)
	total_cost_info = models.CharField(max_length=200)
	average_CO2_info = models.CharField(max_length=200)
	average_cost_info = models.CharField(max_length=200)

	def __str__(self):
		return "Field Related Info"

	class Meta:
		verbose_name = "Field Related Info"
		verbose_name_plural = "Field Related Info"


MODELS = (
	('economy spark red', 'economy spark red'),
	('economy spark blue', 'economy spark blue'),
	('economy spark green', 'economy spark green'),
	('eco spark red', 'eco spark red'),
	('eco spark blue', 'eco spark blue'),
	('eco spark green', 'eco spark green'),
	('efficiency spark red', 'efficiency spark red'),
	('efficiency spark blue', 'efficiency spark blue'),
	('efficiency spark green', 'efficiency spark green'),
	('info model', 'info model'),
)


class Three_Dimensional_Model(models.Model):

	model_id = models.AutoField(primary_key=True)
	model_title = models.CharField(max_length=30, choices=MODELS)
	model_url = models.FileField(storage=PrivateMediaStorage())

	def __str__(self):
		return self.model_title

	class Meta:
		verbose_name = "Three Dimensional Model"
		verbose_name_plural = "Three Dimensional Models"
