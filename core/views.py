from django.shortcuts import render ,render_to_response, redirect

from django.template import RequestContext

# Create your views here.
from django.views.generic import TemplateView
from lacolley_portfolio.models import WebWork, VFXWork

from django.http import HttpResponse




class IndexView(TemplateView):
    template_name = 'core/index.html'
    model = VFXWork

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['compositing'] = VFXWork.objects.all().filter(category='comp')
        print(context['compositing'])

        context['matte'] = VFXWork.objects.all().filter(category='mat')
        context['tracking'] = VFXWork.objects.all().filter(category='trk')
        context['other'] = VFXWork.objects.all().filter(category='oth')
        return context