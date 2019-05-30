from django.shortcuts import render

# Create your views here.

from django.views.generic import TemplateView

from django.views.generic import ListView
from .models import WebWork, VFXWork


# class VFXView(TemplateView):
    
    
    

class VFXWorkList(ListView):
    template_name = 'lacolley_portfolio/portfolio.html'
    model = VFXWork

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['compositing'] = VFXWork.objects.all().filter(category='comp')
        print(context['compositing'])
        context['matte'] = VFXWork.objects.all().filter(category='mat')
        context['tracking'] = VFXWork.objects.all().filter(category='trk')
        context['other'] = VFXWork.objects.all().filter(category='oth')
        return context

