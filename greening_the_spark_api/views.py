from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . import models
from . import serializers
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
		'simulation report dump': '/sim-reports/dump/'
	}

	return Response(api_urls)

#GET Only accessible to authenticated users
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Simulation_Reports_LIST(request):

		#Test this endpoint for get when no objects.

		simulation_report_objects = models.Simulation_Report.objects.all()
		#This serializer should only relay info that EVERYONE can see.

		if simulation_report_objects.count() > 0:
			serializer = serializers.SerializeSimulation_Reports_LIST(
				simulation_report_objects, many=True
			)
			return Response(serializer.data)

		content = {'error': "No game results could be found."}
		return Response(content, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def Simulation_Reports_DETAIL(request, simulation_id):

	#Test for special characters in simulation_id
		try:
			simulation_report_object = get_object_or_404(
				models.Simulation_Report,
				simulation_id=simulation_id
			)
		except models.Simulation_Report.DoesNotExist:
			raise Http404("A game with this ID does not exist")

		# This serializer should only relay info that EVERYONE can see.
		serializer = serializers.SerializeSimulation_Report_Detail(
			simulation_report_object, many=False
			)

		return Response(serializer.data)



@api_view(['POST'])
def Simulation_Reports_CREATE(request):

		serializer = serializers.SerializeSimulation_Report_DATACHECK(
			data=request.data, many=False
		)

		if serializer.is_valid():
			serializer.save()
			print("Data was successfully serialised, now only return ID of the game.")

			date = serializer.data['date']
			simulation_start_time = serializer.data['simulation_start_time']

			try:
				simulation_object = get_object_or_404(
					models.Simulation_Report,
					date=date,
					simulation_start_time=simulation_start_time
				)

			except models.Simulation_Report.DoesNotExist:
				raise Http404("Game ID Not Found")

			return Response({"simulation_id": simulation_object.simulation_id})

		#Currently the post is not valid.
		return Response({'message': "the data passed to the endpoint is not valid."})

