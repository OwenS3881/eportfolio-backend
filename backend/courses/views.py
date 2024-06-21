from django.shortcuts import render
from rest_framework import generics
from .serializers import CourseEntrySerializer
from .models import CourseEntry

class CourseEntryRetrieve(generics.ListAPIView):
    serializer_class = CourseEntrySerializer
    queryset = CourseEntry.objects.all()