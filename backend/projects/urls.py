from django.urls import path
from . import views

urlpatterns = [
    path("", views.ProjectRetrieve.as_view(), name="projects"),
]