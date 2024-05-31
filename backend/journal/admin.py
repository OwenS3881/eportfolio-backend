from django.contrib import admin
from django.contrib.auth.models import User
from .models import JournalEntry

admin.site.site_header = "Owen's ePortfolio Admin"
admin.site.site_title = "Owen's ePortfolio Admin Area"
admin.site.index_title = "Welcome to Owen's ePortfolio Admin Area"

admin.site.register(JournalEntry)

if not User.objects.filter(is_superuser=True).first():
    user = User.objects.create(
        username = 'admin',
        email = 'admin@mywebsite.com',
        is_superuser = True,
    )
    user.set_password('some password')
    user.save()