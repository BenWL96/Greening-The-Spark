from django.db import models

from django.core.validators import MaxValueValidator, MinValueValidator
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

	#Simulation report Data

	game_id = models.AutoField(primary_key=True, unique=True)

	date = models.DateField()
	time = models.TimeField()

	difficulty = models.CharField(max_length=8, choices=DIFFICULTIES)

	demand = models.IntegerField()
	wind = models.IntegerField()
	solar = models.IntegerField()
	fossil_fuels = models.IntegerField()
	nuclear = models.IntegerField()

	#we should use % for both of these valus
	fossil_fuels_utilisation_percentage = models.IntegerField(validators=[MinValueValidator(0, message="value has to be above 0"), MaxValueValidator(100, message="value has to be below 100.")])
	nuclear_fuels_utilisation_percentage = models.IntegerField(validators=[MinValueValidator(0, message="value has to be above 0"), MaxValueValidator(100, message="value has to be below 100.")])

	surplus = models.IntegerField()
	shortfall = models.IntegerField()
	initial_stored = models.IntegerField()
	final_stored = models.IntegerField()
	storage_discrepancy = models.IntegerField()
	efficiency_score = models.IntegerField()

	total_CO2_tonnes = models.IntegerField()
	total_cost_million_pounds = models.IntegerField()
	average_CO2_tonnes_per_gwh = models.IntegerField()
	average_cost_million_pounds_per_gwh = models.IntegerField()
	average_CO2_score = models.IntegerField(default=0)
	average_cost_score = models.IntegerField(default=0)

	#comments
	surplus_comment = models.CharField(max_length=15)
	shortfall_comment = models.CharField(max_length=15)
	storage_discrepancy_comment = models.CharField(max_length=15)
	efficiency_score_comment = models.CharField(max_length=15)
	average_CO2_comment = models.CharField(max_length=15)
	average_cost_comment = models.CharField(max_length=15)

	#Spark Results

	efficiency_spark = models.CharField(choices=RESULTS, max_length=5)
	economy_spark = models.CharField(choices=RESULTS, max_length=5)
	eco_friendliness_spark = models.CharField(choices=RESULTS, max_length=5)

	#All graph related data.

	wind_power_data_values = models.CharField(max_length=150)
	solar_power_data_values = models.CharField(max_length=150)
	demand_power_data_values = models.CharField(max_length=150)

	fossil_fuels_power_data_values = models.CharField(max_length=150)
	nuclear_power_data_values = models.CharField(max_length=150)

	batteries_power_data_values = models.CharField(max_length=150)
	hydro_power_data_values = models.CharField(max_length=150)
	grid_surplus_data_values = models.CharField(max_length=150)


class Info_Panel_Questions(models.Model):
	question_id = models.AutoField(primary_key=True)
	question = models.CharField(unique=True, max_length=255)

class Info_Panel_Answers(models.Model):
	answer_id = models.AutoField(primary_key=True)
	question = models.ForeignKey(Info_Panel_Questions, on_delete=models.CASCADE)
	the_simple_answer = models.CharField(max_length=255)
	the_gts_answer = models.CharField(max_length=255)
	the_complex_answer = models.CharField(max_length=255)