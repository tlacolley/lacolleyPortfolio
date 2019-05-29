from django.shortcuts import render ,render_to_response, redirect

from django.template import RequestContext

# Create your views here.
from django.views.generic import TemplateView


from django.http import HttpResponse




class IndexView(TemplateView):
    template_name = 'core/index.html'




