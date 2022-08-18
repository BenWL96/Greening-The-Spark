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
			"simulation_start_time": simulation_start_time,
			"simulation_end_time": simulation_end_time,
			"simulation_run_time_days": 1,
			"demand": -23,
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,
			"surplus": 23,
			"shortfall": 16,
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,
			"total_CO2": 62,
			"total_cost": 54,
			"average_CO2": 62,
			"average_cost": 72,
			"efficiency": "Green",
			"economy": "Green",
			"eco_friendliness": "Blue",
			"wind_data_values": "-54 41 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54",
			"demand_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",
			"if_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",
			"battery_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"batteries_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
		}

		failing_post_data = {
			"date": date + "d",
			"time": time,
			"simulation_start_time": simulation_start_time,
			"simulation_end_time": simulation_end_time,
			"simulation_run_time_days": 1,
			"demand": -23,
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,
			"surplus": 23,
			"shortfall": 16,
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,
			"total_CO2": 62,
			"total_cost": 54,
			"average_CO2": 62,
			"average_cost": 72,
			"efficiency": "Green",
			"economy": "Green",
			"eco_friendliness": "Blue",
			"wind_data_values": "-54 41 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54",
			"demand_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",
			"if_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",
			"battery_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"batteries_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
		}

		malicious_post_data = {
			"date": date + "d",
			"time": time,
			"simulation_start_time": simulation_start_time,
			"simulation_end_time": simulation_end_time,
			"simulation_run_time_days": "<script>alert('hello')</script>",
			"demand": "Hello",
			"wind": -23,
			"solar": 42,
			"fossil_fuels": -62,
			"nuclear": 64,
			"surplus": "<script>alert('hello')</script>",
			"shortfall": "do something",
			"initial_stored": 45,
			"final_stored": 25,
			"storage_discrepancy": 1,
			"efficiency_score": 51,
			"total_CO2": 62,
			"total_cost": 54,
			"average_CO2": 62,
			"average_cost": 72,
			"efficiency": "Orange",
			"economy": "Green",
			"eco_friendliness": "Blue",
			"wind_data_values": "-54 '<script>alert('hello')</script>' 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"solar_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 '<script>alert('hello')</script>' 41 24 15 61 54 41 24 15 61 54",
			"demand_data_values": "24 15 61 54 41 24 15 61 hello 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",
			"if_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
			"nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",
			"battery_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"batteries_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
			"hydro_level_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
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
