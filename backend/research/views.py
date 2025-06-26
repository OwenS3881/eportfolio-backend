from django.shortcuts import render
from rest_framework import generics
from .serializers import ResearchExperienceSerializer
from .models import ResearchExperience

class ResearchExperienceRetrieve(generics.ListAPIView):
    serializer_class = ResearchExperienceSerializer
    queryset = ResearchExperience.objects.all().order_by("start_date").reverse()

class SingleResearchExperienceRetrieve(generics.ListAPIView):
    serializer_class = ResearchExperienceSerializer
    queryset = ResearchExperience.objects.all().order_by("start_date").reverse()[0:1]