from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ["id", "uf_title", "uf_code", "high_school_title", "high_school_code", "term", "credits", "category"]