from django.contrib import admin

from .models import CourseEntry, Test

admin.site.register(CourseEntry)
admin.site.register(Test)