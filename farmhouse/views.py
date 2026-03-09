from django.shortcuts import render

#from .models import Gallery
# Create your views here.

from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def facilities(request):
    return render(request, 'facilities.html')

def gallery(request):
    return render(request, 'gallery.html')

