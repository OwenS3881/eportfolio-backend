from django.urls import path
from . import views

urlpatterns = [
    path("", views.JournalEntryRetrieve.as_view(), name="journal-entries"),
    path("recent", views.SingleJournalEntryRetrieve.as_view(), name="recent-journal-entry"),
]