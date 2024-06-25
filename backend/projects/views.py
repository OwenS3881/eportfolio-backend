from django.shortcuts import render
from rest_framework import generics
from .serializers import ProjectSerializer
from .models import Project

class ProjectRetrieve(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()