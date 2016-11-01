import scrapy
import MySQLdb

db = MySQLdb.connect(host="mysql",
                     user="root",
                     passwd="root",
                     db="ckl_challenge")

cur = db.cursor()

class TechCrunchSpider(scrapy.Spider):
    name = 'techcrunch'
    start_urls = ['https://techcrunch.com']

    def parse(self, response):
        for feed in response.css('ul.river li.river-block'):
            output = {}
            
            title = feed.css('.block-content h2.post-title a ::text').extract_first()
            image = feed.css('.block-content .thumb img::attr(src)').extract_first()
            category = feed.css('.block-thumb div.tags a::attr(title)').extract_first()
            
            """ This means that river-block is a normal feed
                meaning it's not a video or a featured feed.
                Let's keep it simple.
            """
            if title != None and image != None and category != None:
                cur.execute("INSERT INTO feed_feed (category, image, title, url, author_avatar, author_name, excerpt, created) VALUES " + 
                "("+
                "\""+category.encode('utf-8')+"\","+
                "\""+image.encode('utf-8')+"\","+
                "\""+title.encode('utf-8')+"\","+
                "\""+feed.css('.block-content h2.post-title a::attr(href)').extract_first().encode('utf-8')+"\","+
                "\"/static/img/author@2x.jpg\","+
                "\""+feed.css('.block-content .byline a::text').extract_first().encode('utf-8')+"\","+
                "\""+feed.css('.block-content .excerpt::text').extract_first().encode('utf-8')[:240]+"...\","+
                "CURRENT_TIMESTAMP()"+
                ")")
                cur.fetchall()
            
        db.close()