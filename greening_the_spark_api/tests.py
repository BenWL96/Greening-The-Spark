from django.test import TestCase, Client
import json, datetime
from django.urls import reverse
from factory_djoy import UserFactory

class test_simulation_report_endpoints(TestCase):


	# Here we're just testing the error codes
	# We don't need to add anything to the database.
	def setup(self):
		self.client = Client()

	def test_endpoints_and_functionality(self):

		date = datetime.datetime.today().strftime('%Y-%m-%d')
		time = datetime.datetime.today().strftime('%H:%M:%S')
		simulation_start_time = datetime.datetime.today().strftime('%H:%M:%S')
		simulation_end_time = datetime.datetime.today().strftime('%H:%M:%S')


		"""Test Passing Info To API. 
				This Simulates The Actions That Carl Needs To Do With The 
				Requests Module (for the physical model)"""

		working_post_data = {

			"date": date,
			"time": time,

			"difficulty": "easy",

			"demand": -23,
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,

			"fossil_fuels_utilisation_percentage": 0,
			"nuclear_fuels_utilisation_percentage": 99,

			"surplus": 23,
			"shortfall": 16,
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,

			"total_CO2_tonnes": 62,
			"total_cost_million_pounds": 54,
			"average_CO2_tonnes_per_gwh": 62,
			"average_cost_million_pounds_per_gwh": 72,

			"surplus_comment": 23,
			"shortfall_comment": 16,
			"storage_discrepancy_comment": 1,
			"efficiency_score_comment": 51,
			"average_CO2_comment": 1,
			"average_cost_comment": 51,

			"efficiency_spark": "red",
			"economy_spark": "red",
			"eco_friendliness_spark": "red",

			"wind_power_data_values": "-54 41 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_power_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54",
			"demand_power_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",

			"fossil_fuels_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",

			"batteries_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"grid_surplus_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
		}

		failing_post_data = {

			"date": date + "d",
			"time": time,

			"difficulty": "easy",

			"demand": -23,
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,

			"fossil_fuels_utilisation_percentage": 0,
			"nuclear_fuels_utilisation_percentage": 99,

			"surplus": 23,
			"shortfall": 16,
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,

			"total_CO2_tonnes": 62,
			"total_cost_million_pounds": 54,
			"average_CO2_tonnes_per_gwh": 62,
			"average_cost_million_pounds_per_gwh": 72,

			"surplus_comment": 23,
			"shortfall_comment": 16,
			"storage_discrepancy_comment": 1,
			"efficiency_score_comment": 51,
			"average_CO2_comment": 1,
			"average_cost_comment": 51,

			"efficiency_spark": "red",
			"economy_spark": "red",
			"eco_friendliness_spark": "red",

			"wind_power_data_values": "-54 41 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_power_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54",
			"demand_power_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",

			"fossil_fuels_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",

			"batteries_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"grid_surplus_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
		}


		malicious_post_data = {

			"date": date,
			"time": time,

			"difficulty": "easy",

			"demand": -23,
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,

			"fossil_fuels_utilisation_percentage": 0,
			"nuclear_fuels_utilisation_percentage": 99,

			"surplus": "<script>alert('hello')</script>",
			"shortfall": 16,
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,

			"total_CO2_tonnes": 62,
			"total_cost_million_pounds": 54,
			"average_CO2_tonnes_per_gwh": 62,
			"average_cost_million_pounds_per_gwh": 72,

			"surplus_comment": 23,
			"shortfall_comment": 16,
			"storage_discrepancy_comment": 1,
			"efficiency_score_comment": 51,
			"average_CO2_comment": 1,
			"average_cost_comment": 51,

			"efficiency_spark": "red",
			"economy_spark": "red",
			"eco_friendliness_spark": "red",

			"wind_power_data_values": "-54 '<script>alert('hello')</script>' 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_power_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 '<script>alert('hello')</script>' 41 24 15 61 54 41 24 15 61 54",
			"demand_power_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",

			"fossil_fuels_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",

			"batteries_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"grid_surplus_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
		}

		"""Test Simulation_Reports_LIST endpoint when no auth"""

		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Authentication credentials were not provided.'}

		print("T0 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T0: Simulation_ID list shouldn't be accessible without Auth."
			)

		"""Test apiOverview endpoint when no auth"""

		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Authentication credentials were not provided.'}

		print("T0.25 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T0.25: API Overview shouldn't be accessible without Auth."
			)


		#Force Authenticate Here
		username = "John"
		password = "1234"
		user = UserFactory(username=username,password=password)

		self.client.force_login(user)

		"""Test Simulation_Reports_LIST endpoint when no data"""

		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'error': 'No game results could be found.'}

		print("T0.5 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T0.5: No simulation data should be found"
			)



		"""Post Simulation_Reports_CREATE Correct Data"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=working_post_data,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'simulation_id': 1}

		print("T1 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T1: The dictionary posted is not the same "
				"dictionary that is retreived."
			)


		"""Get Simulation_Reports_LIST"""

		url = reverse('simulation-reports')

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		print("T2 initiate")
		match_dict = {'simulation_id': 1, 'date': date}

		if self.assertEqual(response_dict[0], match_dict) == False:
			return print("T2: Could not find the first instance.")

		"""POST to Simulation_Reports_LIST"""

		url = reverse('simulation-reports')

		response = self.client.post(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Method "POST" not allowed.'}


		print("T3 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T3: Post method was allowed to "
				"Simulation_Reports_LIST when it shouldn't "
				"have been"
			)

		"""POST Simulation_Reports_CREATE incorrect data"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=failing_post_data,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'message': "the data passed to the endpoint is not valid."}

		print("T4 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T4: The data posted should not be serialized"
			)

		"""GET to Simulation_Reports_DETAIL test length response dict
		Take into account generated ID."""

		arg = {"simulation_id": 1}
		url = reverse('simulation-report-detail', kwargs=arg)

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		#Here we are matching the response data to the origin variables
		#We set. We establish the format which Carl can use to post to endpoint.

		
		print("T5 initiate")
		if self.assertEqual(len(response_dict), len(working_post_data) + 1) == False:
			return print("T5: Simulation Reports Detail returned incorrect info")

		"""GET to Simulation_Reports_DETAIL pass string parameter

		arg = {"simulation_id": "p"}
		url = reverse('simulation-report-detail', kwargs=arg)

		msg_match = "django.urls.exceptions.NoReverseMatch: Reverse for 'simulation-report-detail' with keyword arguments '{'simulation_id': 'p'}' not found."
		# Here we are matching the response data to the origin variables
		# We set. We establish the format which Carl can use to post to endpoint.

		print("T6 initiate")
		if self.assertRaises(url, NoReverseMatch) == False:
			return print(
				"T6: Simulation Reports Detail returned incorrect info")"""

		"""POST malicious data to Simulation_Reports_CREATE"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=malicious_post_data,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {
			'message': "the data passed to the endpoint is not valid."}

		print("T7 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T7: An incorrect error message has been thrown in response to"
				"malicious data being passed to the endpoint."
			)


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


"""

{
	date :
	time : 
	difficulty :
	demand : 
	wind :
	solar :
	fossil_fuels :
	nuclear :
	
	fossil_fuels_utilisation_percentage :
	nuclear_fuels_utilisation_percentage :

	surplus :
	shortfall :
	initial_stored :
	final_stored :
	storage_discrepancy :
	efficiency_score :

	total_CO2_tonnes :
	total_cost_million_pounds :
	average_CO2_tonnes_per_gwh :
	average_cost_million_pounds_per_gwh :
	#average_cost_score :

	surplus_comment :
	shortfall_comment :
	storage_discrepancy_comment :
	efficiency_score_comment :
	average_CO2_comment :
	average_cost_comment :

	efficiency_spark :
	economy_spark :
	eco_friendliness_spark :


	wind_power_data_values :
	solar_power_data_values :
	demand_power_data_values :

	fossil_fuels_power_data_values :
	nuclear_power_data_values :

	batteries_power_data_values :
	hydro_power_data_values :
	grid_surplus_data_values :

}

"""