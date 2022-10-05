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
	#average_cost_score = models.IntegerField()

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


	#frequency = models.CharField(max_length=150)
	#fossil_fuels_energy_data_values = models.CharField(max_length=150, db_column=)
	#fossil_fuels_cost_data_values = models.CharField(max_length=150, db_column=)
	#fossil_fuels_energy_data_values = models.CharField(max_length=150, db_column=)
	#fossil_fuels_CO2_data_values = models.CharField(max_length=150, db_column="wind_power")

""" LATEST ITERATION
§ > Date : <date "yyyy-mm-dd">
§ > Time : <time "hh:mm:ss"> 
§ > Difficulty : <text>
§ > Demand : <ideally float, but integer is ok>
§ > Wind : <ideally float, but integer is ok>
§ > Solar : <ideally float, but integer is ok>
§ > Fossil fuels : <ideally float, but integer is ok>
§ > Nuclear : <ideally float, but integer is ok>
§ > Fossil fuels utilisation : <ideally float, but integer is ok>
§ > Nuclear utilisation % : <ideally float, but integer is ok>
§ > Surplus : <ideally float, but integer is ok> "," <comment as text>
§ > Shortfall : <ideally float, but integer is ok> "," <comment as text>
§ > Initial stored : <ideally float, but integer is ok>
§ > Final stored : <ideally float, but integer is ok>
§ > Storage discrepancy : <ideally float, but integer is ok> "," <comment as text>
§ > Efficiency score : <ideally float, but integer is ok> "," <comment as text>
§ > Total CO2 (tonnes) : <integer>
§ > Total cost (£M) : <ideally float, but integer is ok>
§ > Average CO2 (tonnes/GWh) : <ideally float, but integer is ok> "," <comment as text>
§ > Average cost (£M/GWh) : <ideally float, but integer is ok> "," <comment as text>

Sparks:
§ > Efficiency spark : <sprite red|blue|green>
§ > Economy spark : <sprite red|blue|green>
§ > Eco spark : <sprite red|blue|green>

Plot 1 : "Wind, solar, and demand inputs"
§ > wind.power : <space separated list of integer>
§ > solar.power : <space separated list of integer>
§ > demand.power : <space separated list of integer>

Plot 2: "Manual control of renewables"
§ > fossil_fuels.power : <space separated list of integer>
§ > nuclear.power : <space separated list of integer>

Plot 3: "Batteries, pumped hydro and overall supply status"
§ > batteries.power : <space separated list of integer>
§ > hydro.power : <space separated list of integer>
§ > grid.surplus : <space separated list of integer>
"""
	
	
""" PREVIOUS ITERATION
§ > Date : 2022-09-13
§ > Time : 18:38:30
§ > Simulation start time : 2022-09-13 00:00:00
§ > Simulation end time : 2022-09-13 02:00:00
§ > Simulation run time : 2:00:00
§ > Difficulty : easy
§ > Demand : 25
§ > Wind : 3
§ > Solar : 6
§ > Fossil fuels : 7
§ > Nuclear : 10
§ > Fossil fuels utilisation : 9
§ > Nuclear utilisation % : 25
§ > Surplus : 0
§ > Surplus_comment : excellent
§ > Shortfall : 0
§ > Shortfall_comment : excellent
§ > Initial stored : 180
§ > Final stored : 182
§ > Storage discrepancy : 2
§ > Storage discrepancy_comment : excellent
§ > Efficiency score : 100
§ > Efficiency score_comment : excellent
§ > Total CO2 (tonnes) : 4240
§ > Total cost (£M) : 3
§ > Average CO2 (tonnes/GWh) : 169
§ > Average CO2_score : 57
§ > Average CO2_comment : OK
§ > Average cost (£M/GWh) : 0
§ > Average cost_score : 43
§ > Average cost_comment : OK
§ > Efficiency spark : green
§ > Economy spark : blue
§ > Eco spark : blue
§ > sim_time : 00:00:00 00:10:48 00:20:24 00:30:00 00:40:48 00:50:24 01:00:00 01:10:48 01:20:24 01:30:00 01:40:48 01:50:24
§ > wind_power : 0 0 0 0 2 3 5 6 8 9 11 12
§ > solar_power : 0 2 3 5 7 8 10 11 13 14 15 17
§ > demand_power : 0 7 14 20 27 34 40 46 51 56 62 67
§ > fossil_fuels_power : 11 11 11 11 11 11 11 11 11 11 11 11
§ > nuclear_power : 15 15 15 15 15 15 15 15 15 15 15 15
§ > batteries_power : 0 -11 -8 -6 -4 -2 -1 1 2 3 4 6
§ > hydro_power : 0 -11 -8 -6 -4 -2 -1 1 2 3 4 6
§ > batteries_level : 60 61 61 62 62 62 62 62 62 62 62 61
§ > hydro_level : 60 61 61 62 62 62 62 62 62 62 62 61
§ > frequency : 50 50 50 50 50 50 50 50 50 50 50 50
§ > fossil_fuels_energy : 0 1 1 2 3 3 4 4 5 6 6 7
§ > fossil_fuels_cost : 0 0 0 0 0 0 1 1 1 1 1 1
§ > fossil_fuels_CO2 : 37 374 673 973 1309 1609 1908 2245 2544 2843 3180 3479
§ > nuclear_energy : 0 1 2 3 3 4 5 6 7 8 8 9
§ > nuclear_cost : 0 0 0 1 1 1 1 1 1 2 2 2
§ > nuclear_CO2 : 5 50 90 130 175 215 254 299 339 379 424 464
§ > grid_surplus : 26 -1 -1 -1 -0 -0 -0 -0 -0 -0 -0 -0 
"""