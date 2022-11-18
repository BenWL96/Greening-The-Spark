from django.test import TestCase, Client
import json, datetime
from django.urls import reverse
from factory_djoy import UserFactory
from .data import (
	working_post_data,
	failing_post_data,
	malicious_post_data,
	post_data_fossil_nuclear_at_100,
	post_data_fossil_nuclear_at_0,
	post_data_fossil_nuclear_at_minus_one,
	post_data_fossil_nuclear_at_101,
	working_post_data_fields_rearranged,
	date,
	time,

)

class test_simulation_report_endpoints(TestCase):


	# Here we're just testing the error codes
	# We don't need to add anything to the database.
	def setup(self):
		self.client = Client()

	def test_endpoints_and_functionality(self):

		"""Test Passing Info To API. 
				This Simulates The Actions That Carl Needs To Do With The 
				Requests Module (for the physical model)"""


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
		match_dict = {'display_game_id': 1}

		print("T1 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T1: The dictionary posted is not the same "
				"dictionary that is retrieved."
			)


		"""Get Simulation_Reports_LIST"""

		url = reverse('simulation-reports')

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		print("T2 initiate")
		match_dict = {'game_id': 1, 'date': date}

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

		arg = {"game_id": 1}
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

		"""Post Simulation_Reports_CREATE nuclear_fossil at 100%"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=post_data_fossil_nuclear_at_100,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		match_dict = {'display_game_id': 2}

		print("T8 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T8: Nuclear and fossil utilisation percentage "
				"cannot be 100% ??"
			)

		"""Post Simulation_Reports_CREATE nuclear_fossil at 0%"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=post_data_fossil_nuclear_at_0,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		match_dict = {'display_game_id': 3}

		print("T9 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T8: Nuclear and fossil utilisation percentage "
				"cannot be 0% ??"
			)

		"""POST Simulation_Reports_CREATE incorrect data, utilisation_percentage
		not an within range 0-100"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=post_data_fossil_nuclear_at_minus_one,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {
			'message': "the data passed to the endpoint is not valid."}

		print("T10 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T10: The data posted should not be serialized"
			)

		"""POST Simulation_Reports_CREATE incorrect data, utilisation_percentage
				not an within range 0-100"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=post_data_fossil_nuclear_at_101,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {
			'message': "the data passed to the endpoint is not valid."}

		print("T11 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T11: The data posted should not be serialized"
			)

		"""Post Simulation_Reports_CREATE Correct Data But Rearranged Fields"""

		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=working_post_data_fields_rearranged,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		print(response_dict)
		print(response_dict)
		"""match_dict = {'display_game_id': 1}

		print("T1 initiate")
		if self.assertEqual(response_dict, match_dict) == False:
			return print(
				"T1: The dictionary posted is not the same "
				"dictionary that is retrieved."
			)"""
