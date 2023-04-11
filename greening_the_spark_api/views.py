from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from . import models, serializers


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def apiOverview(request):
    api_urls = {

        'simulation reports': '/sim-reports/',
        'simulation report detail': '/sim-reports/<str:simulation_id>/details',
        'simulation report dump': '/sim-reports/dump/',
        'information-panel': '/information-panel/',
        'three dimensional models': '/models/'
    }

    return Response(api_urls)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Simulation_Reports_LIST(request):

        simulation_report_objects = models.Simulation_Report.objects.all()

        sim_report_objects_count_larger_than_0 =\
            simulation_report_objects.count() > 0

        if sim_report_objects_count_larger_than_0 is True:
            serializer = serializers.SerializeSimulation_Reports_LIST(
                simulation_report_objects, many=True
            )
            return Response(serializer.data)

        content = {'error': "No game results could be found."}
        return Response(content, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def Simulation_Reports_DETAIL(request, game_id):

    try:
        simulation_report_object = get_object_or_404(
            models.Simulation_Report,
            game_id=game_id
        )
        print("game with ID found")

    except models.Simulation_Report.DoesNotExist:
        content = {'msg': "A game with this ID does not exist."}
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    serialize_simulation_report_object = \
        serializers.SerializeSimulation_Report_Detail(
            simulation_report_object,
            many=False
        )

    return Response(serialize_simulation_report_object.data)


@api_view(['GET'])
def Simulation_Report_Field_Info(request):

    field_related_info_objects = models.Field_Related_Info.objects.all()
    zero_field_related_info_objects = len(field_related_info_objects) == 0

    if zero_field_related_info_objects is True:
        print("Field related objects do not exist")
        content = {'error': "No field info exists for the simulation report, "
                            "please sign into the admin panel to add some."}
        return Response(content, status=status.HTTP_404_NOT_FOUND)
    else:
        serialize_field_related_info_object = \
            serializers.Serialize_Field_Related_Info(
                field_related_info_objects[0],
                many=False
            )
    return Response(serialize_field_related_info_object.data)


@api_view(['POST'])
def Simulation_Reports_CREATE(request):

    serializer = serializers.SerializeSimulation_Report_DATACHECK(
            data=request.data, many=False
        )

    if serializer.is_valid():
        serializer.save()
        print(
            "Data was successfully serialised, now only "
            "return ID of the game."
        )

        # There should be no two objects with the same time
        # Make sure two can't be posted at the exact same time..

        date = serializer.data['date']
        game_start_time = serializer.data['time']

        try:
            simulation_object = get_object_or_404(
                models.Simulation_Report,
                date=date,
                time=game_start_time
            )

        except models.Simulation_Report.DoesNotExist:
            content = {'error': "Simulation Report does not exist."}
            return Response(content, status=status.HTTP_404_NOT_FOUND)

        return Response({"display_game_id": simulation_object.game_id})

    return Response(
        {'error': "the data passed to the endpoint is not valid."}
    )


@api_view(['GET'])
def Information_Panel_List_GET(request):

    questions = models.Info_Panel_Questions_And_Answers.objects.all()

    if questions.count() > 0:
        serializer = serializers.Serialize_Information_Panel(
            questions,
            many=True
        )
    else:
        content = {"error": "Currently, no questions and / or answers exist,"
                            "please sign into the admin panel to add some."}
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    return Response(
        serializer.data
    )


@api_view(['GET'])
def Three_Dimensional_Model_List_GET(request):

    three_dimension_model_objects = models.Three_Dimensional_Model.objects.all()

    eleven_three_dimension_model_objects =\
        len(three_dimension_model_objects) == 11

    if eleven_three_dimension_model_objects is not True:
        print("11 glb files need to be passed through, else fail")
        raise Http404("11 glb files need to be passed through, else fail")
    else:
        print("11 glb files exist at the endpoint.")

        serialize_three_dimension_model_objects =\
            serializers.Serialize_Three_Dimensional_Models(
                three_dimension_model_objects,
                many=True
            )

        return Response(
            serialize_three_dimension_model_objects.data
        )
