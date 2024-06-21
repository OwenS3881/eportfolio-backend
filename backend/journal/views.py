from django.shortcuts import render
from rest_framework import generics
from .serializers import JournalEntrySerializer
from .models import JournalEntry

class JournalEntryRetrieve(generics.ListAPIView):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all()

class SingleJournalEntryRetrieve(generics.RetrieveAPIView):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all().order_by('date').first()