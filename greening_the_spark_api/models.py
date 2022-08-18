from django.db import models
RESULTS = (
	('Green', 'Green'),
	('Blue', 'Blue'),
	('Red', 'Red')
)

class Simulation_Report(models.Model):

	#Simulation report Data

	date = models.DateField()
	time = models.TimeField()
	simulation_id = models.AutoField(primary_key=True, unique=True)
	simulation_start_time = models.TimeField()
	simulation_end_time = models.TimeField()
	simulation_run_time_days = models.IntegerField()

	demand = models.IntegerField()
	wind = models.IntegerField()
	solar = models.IntegerField()
	fossil_fuels = models.IntegerField()
	nuclear = models.IntegerField()
	surplus = models.IntegerField()
	shortfall = models.IntegerField()
	initial_stored = models.IntegerField()
	final_stored = models.IntegerField()
	storage_discrepancy = models.IntegerField()
	efficiency_score = models.IntegerField()

	total_CO2 = models.IntegerField()
	total_cost = models.IntegerField()
	average_CO2 = models.IntegerField()
	average_cost = models.IntegerField()

	#Spark Results

	efficiency = models.CharField(choices=RESULTS, max_length=5)
	economy = models.CharField(choices=RESULTS, max_length=5)
	eco_friendliness = models.CharField(choices=RESULTS, max_length=5)

	#All graph related data.

	wind_data_values = models.CharField(max_length=150)
	solar_data_values = models.CharField(max_length=150)
	demand_data_values = models.CharField(max_length=150)
	if_power_data_values = models.CharField(max_length=150)
	nuclear_power_data_values = models.CharField(max_length=150)
	battery_power_data_values = models.CharField(max_length=150)
	hydro_power_data_values = models.CharField(max_length=150)
	batteries_level_data_values = models.CharField(max_length=150)
	hydro_level_data_values = models.CharField(max_length=150)
