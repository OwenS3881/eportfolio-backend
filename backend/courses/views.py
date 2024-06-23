from django.shortcuts import render
from rest_framework import generics
from .serializers import CourseSerializer
from .models import Course

class CourseRetrieve(generics.ListAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all().order_by("uf_code")