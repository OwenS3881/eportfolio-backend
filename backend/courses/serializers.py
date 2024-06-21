from rest_framework import serializers
from .models import CourseEntry

class CourseEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseEntry
        fields = ["id", "uf_title", "uf_code", "high_school_title", "high_school_code", "term", "credits", "category"]