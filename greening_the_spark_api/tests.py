from django.test import TestCase, Client
import json, datetime
from django.urls import reverse
from factory_djoy import UserFactory
from . import models
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

		
		match_dict = {'display_game_id': 2}
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
			'message': "the data passed to the endpoint is not valid."}
		self.assertEqual(response_dict, match_dict)





class test_simulation_report_endpoints_auth(TestCase):

	def setUp(self):
		self.client = Client()
		username = "John"
		password = "1234"
		user = UserFactory(username=username, password=password)
		self.client.force_login(user)

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
		match_dict = {'game_id': 1, 'date': date}

		self.assertEqual(response_dict[0], match_dict)






class test_info_panel_endpoint(TestCase):

	def setUp(self):

		self.client = Client()

		self.question = models.Info_Panel_Questions.objects.create(
			question="Info Panel Q1"
		)

		self.answer = models.Info_Panel_Answers.objects.create(
			question=self.question,
			the_simple_answer="answer 1",
			the_gts_answer="answer 2",
			the_complex_answer="answer 3"
		)

		self.question_2 = models.Info_Panel_Questions.objects.create(
			question="Info Panel Q2"
		)

		self.answer_2 = models.Info_Panel_Answers.objects.create(
			question=self.question_2,
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

		count_questions = models.Info_Panel_Questions.objects.all()
		self.assertEquals(count_questions.count(), 2)

	def test_quantity_return_endpoint(self):

		url = reverse('information-panel-list-get')

		response = self.client.get(
			url,
		)
		input_dict = response.data
		response_dict = json.loads(json.dumps(input_dict))
		self.assertEquals(len(response_dict), 2)