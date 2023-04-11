import datetime
import json
import tempfile
import unittest

from django.test import Client, TestCase
from django.urls import reverse
from factory_djoy import UserFactory
from rest_framework import status

from . import models, utils
from .data import (date, failing_post_data, info_data, info_data_2,
                   malicious_post_data, post_data_fossil_nuclear_at_0,
                   post_data_fossil_nuclear_at_100,
                   post_data_fossil_nuclear_at_101,
                   post_data_fossil_nuclear_at_minus_one, questionmark_data,
                   time, working_post_data,
                   working_post_data_fields_rearranged)

"""
class TestSimulationReportEndpointsNonAuth(TestCase):

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
        game_id_returned = response_dict['display_game_id']
        #why 2 ??

        match_dict = {'display_game_id': game_id_returned}
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
            'error': "the data passed to the endpoint is not valid."
        }
        self.assertEqual(response_dict, match_dict)


class TestSimulationReportEndpointsAuth(TestCase):

    def setUp(self):
        self.client = Client()
        username = "John"
        password = "1234"
        user = UserFactory(username=username, password=password)
        self.client.force_login(user)

        url = reverse('simulation-report-create')
        response = self.client.post(
            url,
            data=working_post_data,
        )
        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        self.simulation_id = response_dict['display_game_id']

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

        url = reverse('simulation-reports')

        response = self.client.get(
            url)

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        match_dict = {'game_id': self.simulation_id, 'date': date}

        self.assertEqual(response_dict[0], match_dict)

    def test_GET_sim_report_response_length_when_results_and_no_qmark_data(self):

        arg = {"game_id": self.simulation_id}
        url = reverse('simulation-report-detail', kwargs=arg)

        response = self.client.get(
            url)

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        print(response_dict)
        print(response_dict)
        self.assertEquals(len(response_dict), 1)

    def test_GET_sim_report_response_length_when_results_and_qmark_data(self):
        info = "relevant info"
        models.Field_Related_Info.objects.create(
            demand_info=info,
            wind_info=info,
            solar_info=info,
            fossil_fuels_info=info,
            nuclear_info=info,
            fossil_fuels_utilisation_percentage_info=info,
            nuclear_fuels_utilisation_percentage_info=info,
            surplus_info=info,
            shortfall_info=info,
            initial_stored_info=info,
            final_stored_info=info,
            storage_discrepancy_info=info,
            efficiency_score_info=info,
            total_CO2_tonnes_info=info,
            total_cost_million_pounds_info=info,
            average_CO2_tonnes_per_gwh_info=info,
            average_cost_million_pounds_per_gwh_info=info
        )

        arg = {"game_id": self.simulation_id}
        url = reverse('simulation-report-detail', kwargs=arg)

        response = self.client.get(
            url)

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        self.assertEquals(len(response_dict), 2)


    def test_GET_sim_report_response_second_json_when_qmark_data(self):

        info = "relevant info"
        models.Field_Related_Info.objects.create(
            demand_info=info,
            wind_info=info,
            solar_info=info,
            fossil_fuels_info=info,
            nuclear_info=info,
            fossil_fuels_utilisation_percentage_info=info,
            nuclear_fuels_utilisation_percentage_info=info,
            surplus_info=info,
            shortfall_info=info,
            initial_stored_info=info,
            final_stored_info=info,
            storage_discrepancy_info=info,
            efficiency_score_info=info,
            total_CO2_tonnes_info=info,
            total_cost_million_pounds_info=info,
            average_CO2_tonnes_per_gwh_info=info,
            average_cost_million_pounds_per_gwh_info=info
        )


        arg = {"game_id": self.simulation_id}
        url = reverse('simulation-report-detail', kwargs=arg)

        response_2 = self.client.get(
            url
        )

        input_dict_2 = response_2.data
        response_array = json.loads(json.dumps(input_dict_2))

        match_data = questionmark_data

        print(response_array)
        self.assertEquals(response_array[1], match_data)



class TestInfoPanelEndpoint(TestCase):

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


class TestTypeChecker(TestCase):

    def test_Simulation_Reports_DETAIL_fail(self):
        game_id = "123"
        check_game_id_return_false = utils.game_id_type_checker(game_id)
        self.assertEquals(check_game_id_return_false, False)

    def test_Simulation_Reports_DETAIL_success(self):
        game_id = 123
        check_game_id_return_true = utils.game_id_type_checker(game_id)
        self.assertEquals(check_game_id_return_true, True)



class TestThreeDimensionalModelListEndpoint(TestCase):

    def setUp(self):
        self.client = Client()

    def test_endpoint_success(self):

        # This is not working

        # why is this returning 400 error ?
        # something is going wrong at serialiser level as
        # logic works perfectly up until serialised


        a_simple_file = tempfile.NamedTemporaryFile(suffix=".jpg").name

        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark red',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark blue',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark green',
            model_url=a_simple_file
        )

        models.Three_Dimensional_Model.objects.create(
            model_title='eco spark red',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='eco spark blue',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='eco spark green',
            model_url=a_simple_file
        )

        models.Three_Dimensional_Model.objects.create(
            model_title='efficiency spark red',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='efficiency spark blue',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='efficiency spark green',
            model_url=a_simple_file
        )

        models.Three_Dimensional_Model.objects.create(
            model_title='info model',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='powerplant model',
            model_url=a_simple_file
        )

        url = reverse('model-list-get')
        response = self.client.get(
            url,
        )

        print(response.status_code)
        print(response.status_code)
        print(response.status_code)

        # Why is the serializer giving a 400 error in the test
        # and not a 400 error at /api/v1/models/

    def test_endpoint_failure(self):
        url = reverse('model-list-get')
        response = self.client.get(
            url,
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_endpoint_failure_5_models(self):
        a_simple_file = tempfile.NamedTemporaryFile(suffix=".jpg").name

        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark red',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark blue',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='economy spark green',
            model_url=a_simple_file
        )

        models.Three_Dimensional_Model.objects.create(
            model_title='eco spark red',
            model_url=a_simple_file
        )
        models.Three_Dimensional_Model.objects.create(
            model_title='eco spark blue',
            model_url=a_simple_file
        )


        url = reverse('model-list-get')
        response = self.client.get(
            url,
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class TestChoiceModels(TestCase):

    def test_three_dim_models(self):
        # According to docs, the names of these models should be limited
        # to the names specified in MODELS array.
        a_simple_file = tempfile.NamedTemporaryFile(suffix=".jpg").name

        object = models.Three_Dimensional_Model.objects.create(
            model_title='eco spark blue',
            model_url=a_simple_file
        )

        ecosparkblue = models.Three_Dimensional_Model.objects.get(
            model_title="eco spark blue"
        )
        print(ecosparkblue)

        self.assertEquals(object, ecosparkblue)


class TestCreateEndpointFieldValidation(TestCase):

    def setUp(self):
        self.client = Client()

    def test_sim_repo_validation_when_fossil_nuclear_at_100(self):

        # Post Simulation_Reports_CREATE nuclear_fossil at 100%

        url = reverse('simulation-report-create')

        response = self.client.post(
            url,
            data=post_data_fossil_nuclear_at_100,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))

        self.assertNotEqual(response_dict.keys(), "error")

    def test_sim_repo_validation_when_fossil_nuclear_at_0(self):
        # Post Simulation_Reports_CREATE nuclear_fossil at 0%

        url = reverse('simulation-report-create')

        response = self.client.post(
            url,
            data=post_data_fossil_nuclear_at_0,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))

        self.assertNotEqual(response_dict.keys(), "error")

    def test_sim_repo_validation_when_not_between_0_and_100(self):

        url = reverse('simulation-report-create')

        response = self.client.post(
            url,
            data=post_data_fossil_nuclear_at_minus_one,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        match_dict = {
            'error': "the data passed to the endpoint is not valid."}

        self.assertEqual(response_dict, match_dict)

    def test_sim_repo_validation_when_utils_perc_not_between_0_and_100(self):

        url = reverse('simulation-report-create')

        response = self.client.post(
            url,
            data=post_data_fossil_nuclear_at_101,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        match_dict = {
            'error': "the data passed to the endpoint is not valid."}

        self.assertEqual(response_dict, match_dict)
    """


class TestSimulationReportFieldInfo(TestCase):

    def setUp(self):
        self.client = Client()

    def test_field_related_info_no_data(self):

        url = reverse('simulation-report-field-info')

        response = self.client.get(
            url,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        match_dict = {
            'error': "No field info exists for the simulation report, "
                     "please sign into the admin panel to add some."
        }

        self.assertEqual(response_dict, match_dict)

    def test_field_related_info(self):

        # An object needs to exists for this to be successful
        models.Field_Related_Info.objects.create(
            demand_info="Field 1",
            wind_info="Field 1",
            solar_info="Field 1",
            fossil_fuels_info="Field 1",
            nuclear_info="Field 1",
            fossil_fuels_utilisation_percentage_info="Field 1",
            nuclear_fuels_utilisation_percentage_info="Field 1",
            surplus_info="Field 1",
            shortfall_info="Field 1",
            initial_stored_info="Field 1",
            final_stored_info="Field 1",
            storage_discrepancy_info="Field 1",
            efficiency_score_info="Field 1",
            total_CO2_tonnes_info="Field 1",
            total_cost_million_pounds_info="Field 1",
            average_CO2_tonnes_per_gwh_info="Field 1",
            average_cost_million_pounds_per_gwh_info="Field 1"
        )
        url = reverse('simulation-report-field-info')

        response = self.client.get(
            url,
        )

        input_dict = response.data
        response_dict = json.loads(json.dumps(input_dict))
        match_dict ={
            'demand_info': 'Field 1',
            'wind_info': 'Field 1',
            'solar_info': 'Field 1',
            'fossil_fuels_info': 'Field 1',
            'nuclear_info': 'Field 1',
            'fossil_fuels_utilisation_percentage_info': 'Field 1',
            'nuclear_fuels_utilisation_percentage_info': 'Field 1',
            'surplus_info': 'Field 1',
            'shortfall_info': 'Field 1',
            'initial_stored_info': 'Field 1',
            'final_stored_info': 'Field 1',
            'storage_discrepancy_info': 'Field 1',
            'efficiency_score_info': 'Field 1',
            'total_CO2_tonnes_info': 'Field 1',
            'total_cost_million_pounds_info': 'Field 1',
            'average_CO2_tonnes_per_gwh_info': 'Field 1',
            'average_cost_million_pounds_per_gwh_info': 'Field 1'
        }

        self.assertEqual(response_dict, match_dict)
