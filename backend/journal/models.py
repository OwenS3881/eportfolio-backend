from django.db import models

# mac test

class JournalEntry(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateTimeField()
    content = models.TextField()

    def __str__(self):
        return self.title