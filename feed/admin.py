from django.contrib import admin

from feed.models import Feed

# FeedAdmin class
#
# Used to determine how our Feed table will behave on Django Admin app
class FeedAdmin(admin.ModelAdmin):
    list_display = ['title', 'excerpt']
    list_filter = ['created']
    search_fields = ['title', 'author', 'excerpt']
    date_hierarchy = 'created'
    save_on_top = True

admin.site.register(Feed, FeedAdmin)

