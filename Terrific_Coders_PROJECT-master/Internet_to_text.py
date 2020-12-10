from newsapi import NewsApiClient
import string
import sys
from collections import *

newsapi = NewsApiClient(api_key='9d6a4dd0080d47759826482fc796e473')

all_domains=['vox.com','bbc.com','www.sciencenews.org','buzzfeednews.com',
             'www.theguardian.com/us', 'nbcnews.com', 'apnews.com', 'npr.org']
# switched out sciencenews for news.nationalgeographic.com
# switched out theguardian for abcnews.go.com
# switched nationalgeographic to www.sciencedaily.com
# switched abcnews to reuters
# Still not working properly
# Default link will always be used: www.sciencenews.org
# Default link will always be used: www.theguardian.com/us
fd = open("Looking-for-good.txt", "w+")

for k in all_domains:
    data = newsapi.get_everything(domains=k,
                                  from_param='2020-11-25',
                                  to='2020-12-10',
                                  language='en',
                                  sort_by='publishedAt',
                                  page=2)
    # data = newsapi.get_sources()
    # category='general', language='en', country='us'

    # sources
    for x, y in enumerate(data["articles"]):
        fd.write(y["url"] + "\n" )

fd.close()