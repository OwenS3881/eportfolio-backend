from django.db import models

class Course(models.Model):
    uf_title = models.CharField(max_length=200)
    uf_code = models.CharField(max_length=50)
    high_school_title = models.CharField(max_length=200, blank=True, null=True)
    high_school_code = models.CharField(max_length=50, blank=True, null=True)
    term = models.CharField(max_length=50)
    credits = models.IntegerField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    
class Test(models.Model):
    test = models.CharField(max_length=200)