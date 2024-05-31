from django.contrib import admin
from django.contrib.auth.models import User
from .models import JournalEntry

admin.site.site_header = "Owen's ePortfolio Admin"
admin.site.site_title = "Owen's ePortfolio Admin Area"
admin.site.index_title = "Welcome to Owen's ePortfolio Admin Area"

admin.site.register(JournalEntry)


user = User.objects.create(
    username = 'owens2',
    email = 'owenski09@gmail.com',
    is_superuser = True,
    is_staff = True,
)
user.set_password('password')
user.save()