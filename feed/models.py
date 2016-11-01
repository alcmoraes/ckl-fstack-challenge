from __future__ import unicode_literals
from django.utils import timezone
from django.db import models

"""

"""
class Feed(models.Model):
    url = models.CharField(max_length=255, unique=True)
    category = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    excerpt = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    author_name = models.CharField(max_length=255)
    author_avatar = models.CharField(max_length=255)
    created = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-created']

    def __unicode__(self):
        return u'%s' % self.title