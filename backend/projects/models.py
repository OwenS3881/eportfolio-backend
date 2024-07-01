from django.db import models
from django.contrib.postgres.fields import ArrayField

class Project(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateTimeField(blank=True, null=True)
    description = models.TextField()
    skills = models.CharField(max_length=1000)
    url = models.CharField(max_length=200)

    def __str__(self):
        return self.title