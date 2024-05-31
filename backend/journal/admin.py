from django.contrib import admin

from .models import JournalEntry

admin.site.site_header = "Owen's ePortfolio Admin"
admin.site.site_title = "Owen's ePortfolio Admin Area"
admin.site.index_title = "Welcome to Owen's ePortfolio Admin Area"

admin.site.register(JournalEntry)