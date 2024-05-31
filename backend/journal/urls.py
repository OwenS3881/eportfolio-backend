from django.urls import path
from . import views

urlpatterns = [
    path("", views.JournalEntryRetrieve.as_view(), name="journal-entries"),
]