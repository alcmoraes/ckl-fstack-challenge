# -*- coding: utf-8 -*-
import scrapy
from crunchspider.items import FeedItem

class TechcrunchSpider(scrapy.Spider):
    name = "techcrunch"
    allowed_domains = ["https://techcrunch.com"]
    start_urls = ['https://techcrunch.com/',]

    def parse(self, response):
        for feed in response.css('ul.river li.river-block'):
            
            feedItem = FeedItem()

            title = feed.css('.block-content h2.post-title a ::text').extract_first()
            category = feed.css('.block-thumb div.tags a::attr(title)').extract_first()
            image = feed.css('.block-content a.thumb img::attr(data-src)').extract_first()

            if title != None and category != None and image != None:
                feedItem['category'] = category
                feedItem['title'] = title 
                feedItem['image'] = image.split("?")[0]
                feedItem['url'] = feed.css('.block-content h2.post-title a::attr(href)').extract_first()
                feedItem['author_avatar'] = '/static/img/default_avatar@2x.jpg'
                feedItem['author_name'] = feed.css('.block-content .byline a::text').extract_first()
                feedItem['excerpt'] = feed.css('.block-content .excerpt::text').extract_first()[:230] + "..."
                feedItem['created'] = feed.css('.block-content .byline time::attr(datetime)').extract_first()
                yield feedItem