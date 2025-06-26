from django.urls import path
from . import views

urlpatterns = [
    path("", views.ResearchExperienceRetrieve.as_view(), name="research"),
    path("recent/", views.SingleResearchExperienceRetrieve.as_view(), name="recent-research"),
]