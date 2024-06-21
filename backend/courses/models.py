from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    code = models.CharField(max_length=20)
    term = models.CharField(max_length=50)
    credits = models.IntegerField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title