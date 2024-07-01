from django.shortcuts import render
from rest_framework import generics
from .serializers import ProjectSerializer
from .models import Project

class ProjectRetrieve(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by("start_date").reverse()

class SingleProjectRetrieve(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by("start_date").reverse()[0:1]