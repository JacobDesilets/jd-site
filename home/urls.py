from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),  # app homepage
    path('spaceyard/', views.spaceyard),
]
