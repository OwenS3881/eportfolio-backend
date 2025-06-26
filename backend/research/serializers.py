from rest_framework import serializers
from .models import ResearchExperience

class ResearchExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchExperience
        fields = ["id", "title", "image", "start_date", "end_date", "description", "skills", "url"]