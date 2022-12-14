from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . import models, utils, serializers
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status


#User must sign into admin panel to view these endpoints.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def apiOverview(request):
	api_urls = {

		'simulation reports': '/sim-reports/',
		'simulation report detail': '/sim-reports/<str:simulation_id>/details',
		'simulation report dump': '/sim-reports/dump/',
		'information-panel/': '/information-panel/',

	}

	return Response(api_urls)

#GET Only accessible to authenticated users
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Simulation_Reports_LIST(request):

		#Test this endpoint for get when no objects.

		simulation_report_objects = models.Simulation_Report.objects.all()
		#This serializer should only relay info that EVERYONE can see.

		sim_report_objects_count_larger_than_0 = simulation_report_objects.count() > 0

		if sim_report_objects_count_larger_than_0 == True:
			serializer = serializers.SerializeSimulation_Reports_LIST(
				simulation_report_objects, many=True
			)
			return Response(serializer.data)

		content = {'error': "No game results could be found."}
		return Response(content, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def Simulation_Reports_DETAIL(request, game_id):

		"""
		#type check game_id
		#perhaps unnecessary.
		if utils.game_id_type_checker(game_id) == False:
			content = {'msg': 'parameter type incorrect, ensure an integer.'}
			return Response(content, status=status.HTTP_400_NOT_FOUND)
"""
		try:
			simulation_report_object = get_object_or_404(
				models.Simulation_Report,
				game_id=game_id
			)
			print("game with ID found")

		except models.Simulation_Report.DoesNotExist:
			content = {'msg': "A game with this ID does not exist."}
			return Response(content, status=status.HTTP_404_NOT_FOUND)


		field_related_info_objects = models.Field_Related_Info.objects.all()
		zero_field_related_info_objects = len(field_related_info_objects) == 0

		if zero_field_related_info_objects == True:
			print("Field related objects do not exist")
			raise Http404("Field related objects do not exist")
		else:
			serialize_field_related_info_object = serializers.Serialize_Field_Related_Info(
				field_related_info_objects[0],
				many=False
			)

		serialize_simulation_report_object = serializers.SerializeSimulation_Report_Detail(
			simulation_report_object,
			many=False
			)

		return Response([
			serialize_simulation_report_object.data,
			serialize_field_related_info_object.data
		])



@api_view(['POST'])
def Simulation_Reports_CREATE(request):

		serializer = serializers.SerializeSimulation_Report_DATACHECK(
			data=request.data, many=False
		)


		if serializer.is_valid():
			serializer.save()
			print("Data was successfully serialised, now only return ID of the game.")

			#There should be no two objects with the same time
			#Make sure two can't be posted at the exact same time..

			date = serializer.data['date']
			game_start_time = serializer.data['time']

			try:
				simulation_object = get_object_or_404(
					models.Simulation_Report,
					date=date,
					time=game_start_time
				)

			except models.Simulation_Report.DoesNotExist:
				raise Http404("Game ID Not Found")

			return Response({"display_game_id": simulation_object.game_id})

		#Currently the post is not valid.
		return Response({'message': "the data passed to the endpoint is not valid."})


@api_view(['GET'])
def Information_Panel_List_GET(request):
	# fetch all questions and then pass to serialiser to get all answers related.
	questions = models.Info_Panel_Questions_And_Answers.objects.all()
	# By this point we must already checked whether the questions have an answer. 	#If not then they should be filtered out.

	if questions.count() > 0:
		serializer = serializers.Serialize_Information_Panel(
			questions,
			many=True
		)
		return Response(serializer.data)
	else:
		raise Http404("No questions and / or answers exists")
