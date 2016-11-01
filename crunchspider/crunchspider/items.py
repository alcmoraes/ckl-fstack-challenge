# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy_djangoitem import DjangoItem
from feed.models import Feed

# FeedItem class
#
# Used to match the Feed DjangoModel
class FeedItem(DjangoItem):
    django_model = Feed
