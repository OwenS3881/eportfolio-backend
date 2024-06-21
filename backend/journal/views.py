from django.shortcuts import render
from rest_framework import generics
from .serializers import JournalEntrySerializer
from .models import JournalEntry

class JournalEntryRetrieve(generics.ListAPIView):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all().order_by('date').reverse()

class SingleJournalEntryRetrieve(generics.ListAPIView):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all().order_by('date').reverse()[0:1]