from django.urls import path
from . import views

urlpatterns = [
    path("", views.CourseEntryRetrieve.as_view(), name="courses"),
]