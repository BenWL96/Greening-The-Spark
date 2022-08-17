from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os


class Assets(View):

    def get(self, _request):
        path = os.path.join(os.path.dirname(__file__), 'static', 'index.html')

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()