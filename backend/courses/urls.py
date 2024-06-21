from django.urls import path
from . import views

urlpatterns = [
    path("", views.CourseRetrieve.as_view(), name="courses"),
]