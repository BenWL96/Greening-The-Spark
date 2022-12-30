from django.test import TestCase, Client
import json, datetime
from django.urls import reverse
from factory_djoy import UserFactory
from . import models, utils
from .data import (

	working_post_data,
	failing_post_data,
	malicious_post_data,
	post_data_fossil_nuclear_at_100,
	post_data_fossil_nuclear_at_0,
	post_data_fossil_nuclear_at_minus_one,
	post_data_fossil_nuclear_at_101,
	working_post_data_fields_rearranged,
	info_data,
	info_data_2,
	questionmark_data,
	date,
	time,

)


class test_simulation_report_endpoints_non_auth(TestCase):

	def setUp(self):
		self.client = Client()

	def test_sim_repo_endpoints_no_auth(self):

		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Authentication credentials were not provided.'}
		self.assertEquals(response_dict, match_dict)

	def test_api_overview_no_auth(self):
		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Authentication credentials were not provided.'}

		self.assertEquals(response_dict, match_dict)

	def test_post_sim_reports_create_working_data(self):
		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=working_post_data,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))

		#why 2 ??

		match_dict = {'display_game_id': 4}
		self.assertEqual(response_dict, match_dict)

	def test_post_sim_reports_create_failing_data(self):
		url = reverse('simulation-report-create')

		response = self.client.post(
			url,
			data=failing_post_data,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {
			'message': "the data passed to the endpoint is not valid."
		}
		self.assertEqual(response_dict, match_dict)





class test_simulation_report_endpoints_auth(TestCase):

	def setUp(self):
		self.client = Client()
		username = "John"
		password = "1234"
		user = UserFactory(username=username, password=password)
		self.client.force_login(user)

		self.info = "relevant info"
		self.field_info = models.Field_Related_Info.objects.create(
			demand_info=self.info,
			wind_info=self.info,
			solar_info=self.info,
			fossil_fuels_info=self.info,
			nuclear_info=self.info,
			fossil_fuels_utilisation_percentage_info=self.info,
			nuclear_fuels_utilisation_percentage_info=self.info,
			surplus_info=self.info,
			shortfall_info=self.info,
			initial_stored_info=self.info,
			final_stored_info=self.info,
			storage_discrepancy_info=self.info,
			efficiency_score_info=self.info,
			total_CO2_tonnes_info=self.info,
			total_cost_million_pounds_info=self.info,
			average_CO2_tonnes_per_gwh_info=self.info,
			average_cost_million_pounds_per_gwh_info=self.info
		)


	def test_sim_reports_list_auth_no_results(self):
		url = reverse('simulation-reports')

		response = self.client.get(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'error': 'No game results could be found.'}
		self.assertEquals(response_dict, match_dict)

	def test_post_sim_reports_create_working_data_then_check_list_len(self):
		url = reverse('simulation-report-create')

		self.client.post(
			url,
			data=working_post_data,
		)

		url = reverse('simulation-reports')

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'game_id': 3, 'date': date}

		self.assertEqual(response_dict[0], match_dict)


	def test_GET_sim_report_response_length(self):

		url = reverse('simulation-report-create')

		self.client.post(
			url,
			data=working_post_data,
		)

		arg = {"game_id": 1}
		url = reverse('simulation-report-detail', kwargs=arg)

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		self.assertEquals(len(response_dict), 2)


	def test_GET_sim_report_response_second_json(self):

		url = reverse('simulation-report-create')

		response_1 = self.client.post(
			url,
			data=working_post_data,
		)

		input_dict_1 = response_1.data
		response_dict_1 = json.loads(json.dumps(input_dict_1))

		game_id = response_dict_1['display_game_id']

		arg = {"game_id": game_id}
		url = reverse('simulation-report-detail', kwargs=arg)

		response_2 = self.client.get(
			url
		)

		input_dict_2 = response_2.data
		response_array = json.loads(json.dumps(input_dict_2))

		match_data = questionmark_data

		print(response_array)
		self.assertEquals(response_array[1], match_data)




class test_info_panel_endpoint(TestCase):

	def setUp(self):

		self.client = Client()

		self.question = models.Info_Panel_Questions_And_Answers.objects.create(
			question="Info Panel Q1",
			the_simple_answer="answer 1",
			the_gts_answer="answer 2",
			the_complex_answer="answer 3"
		)

		self.question_2 = models.Info_Panel_Questions_And_Answers.objects.create(
			question="Info Panel Q2",
			the_simple_answer="answer 1",
			the_gts_answer="answer 2",
			the_complex_answer="answer 3"
		)



	def test_get_request(self):

		url = reverse('information-panel-list-get')
		response = self.client.get(
			url,
		)
		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		self.assertEquals(response_dict[0], info_data)

	def test_post_request(self):

		url = reverse('information-panel-list-get')

		response = self.client.post(
			url,
		)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		match_dict = {'detail': 'Method "POST" not allowed.'}
		self.assertEquals(response_dict, match_dict)

	def test_quantity_returned_database(self):

		count_questions = models.Info_Panel_Questions_And_Answers.objects.all()
		self.assertEquals(count_questions.count(), 2)

	def test_quantity_return_endpoint(self):

		url = reverse('information-panel-list-get')

		response = self.client.get(
			url,
		)
		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		self.assertEquals(len(response_dict), 2)

"""
class test_simulation_report_detail(TestCase):

	def setUp(self):
		self.client = Client()

	def test_sim_repo_detail_endpoint_no_field_info(self):
		url = reverse('simulation-report-create')

		self.client.post(
			url,
			data=working_post_data,
		)

		arg = {"game_id": 1}
		url = reverse('simulation-report-detail', kwargs=arg)

		response = self.client.get(
			url)

		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		print(response_dict)
		print(response_dict)"""

class testTypeChecker(TestCase):

	def test_Simulation_Reports_DETAIL_fail(self):
		game_id = "123"
		check_game_id_return_false = utils.game_id_type_checker(game_id)
		self.assertEquals(check_game_id_return_false, False)

	def test_Simulation_Reports_DETAIL_success(self):
		game_id = 123
		check_game_id_return_true = utils.game_id_type_checker(game_id)
		self.assertEquals(check_game_id_return_true, True)

