from newsapi import NewsApiClient
import string
import sys
from collections import *

newsapi = NewsApiClient(api_key='9d6a4dd0080d47759826482fc796e473')

all_domains=['vox.com','bbc.com','sciencenews.org','buzzfeednews.com',
             'theguardian.com', 'nbcnews.com', 'apnews.com', 'npr.org']

fd = open("Looking-for-good.txt", "w+")

for k in all_domains:
    data = newsapi.get_everything(domains=k,
                                  from_param='2020-11-25',
                                  to='2020-12-09',
                                  language='en',
                                  sort_by='publishedAt',
                                  page=2)

    for x, y in enumerate(data["articles"]):
        fd.write(y["url"] + "\n" )

fd.close()