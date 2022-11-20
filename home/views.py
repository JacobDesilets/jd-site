from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'home.html')


def spaceyard(request):
    return render(request, 'spaceyard.html')
