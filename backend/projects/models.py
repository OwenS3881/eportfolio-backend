from django.db import models
from django.contrib.postgres.fields import ArrayField

class Project(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    description = models.TextField()
    skills = ArrayField(
        models.CharField(max_length=200)
    )
    url = models.CharField(max_length=200)

    def __str__(self):
        return self.title