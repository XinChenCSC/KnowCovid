# Terrific Coders - KnowCOVID


## Overview

KnowCOVID is a news application designed to deliver coronavirus news. Our content
is exclusive to written news articles; news from videos and podcasts are avoided.
Articles are updated each week in order to keep content up-to-date. The news
we provide relates more to the coronavirus pandemic in the U.S rather then
the situation in other countries. 


## Getting Started
This README.md is visible because you have access to 'Terrific_Coders_PROJECT'.
Please download the repository. All relevant code is in the folder 
'Terrific_Coders_PROJECT-master'. ---Xin, Janice, I coulden't get the
website to run. Node modules is missing? Fix this please or replace this
comment with the appropriate directions for the professor to run the
website---


## Requirements

(___TODO__: List out any technologies needed to run your project_)

All of our code is written in two languages:
The frontend is written in React.
The backend in written in Python.
Make sure you have support for both languages.

The following are commands to run to ensure you have all available
libraries:
npm install
pip install newsapi-python
pip install bs4


## Data Model

Keyword lists and preferred websites are initialized in PYT_dictionary.py .
Keyword lists are the following:
PRIMARY   - a few terms that guarentee an article type (in this case its 'coronavirus', 'COVID-19', and 'corona')
SECONDARY - a long list of terms that are likely to be found alongside primary keywords.
BAD       - terms that identify a topic to be avoided in article. In our case, the topic is politics.
Website lists are the following:
preferred_websites - limit searches of articles on the internet to trusted sources.

The backend is made up of 4 files: 
Internet_to_text.py, Automate_in_masse.py, scrape_article.py, and PYT_dictionary.py .

Their purpose is as follows:
Internet_to_text.py - Find links for articles from our trusted sources. Save those
                      links to a .txt file.
scrape_article.py -   Converts the content of an article, from some given link, to
                      .txt files
PYT_dictionary.py -   Classify articles extracted by scrape_article.py into 
                      different article types. Makes decisions about whether
                      the associated website to that .txt file should be 
                      posted to our website.
Automate_en_masse.py - By using the output given from Internet_to_text.py, runs
                       both scrape_article.py and the functions in PYT_dictionary.py
                       to give a updated list of websites to be used for the week.
                       This official list is found under the foler 
                       'Websites-of-the-Week' under the name 'results.txt'
                       
Functions available in PYT_dictionary.py include:
print_NEAT(...) - prints a list with 5 elements per line
print_keyword_lists(...) - prints 3 keyword lists with 5 words per line.
classify_article(test_runs_date, fileNames, list_of_url) - 
                           can classify an article to 5 different types:
                           "This is a good article!"
                           "This article is politics and corona."
                           "This article is politics."
                           "This article is irrelevant."
                           "This article is a mix of things."
                           An article that belongs to our website is a
                           "...good article!". However, if our extracted
                           content is not directly related to coronavirus,
                           it may be appropriate to have a "...mix of things."
                           article for a preferred website. The other 3 
                           article types aren't necessary for the backend
                           but were relevant when trying to find 'formulas'
                           for classification of articles.

 

## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: Write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format)_)

1. As non-registered user, I can create a new account on the site.
2. As a user, I can log in to the site.
3. As a user, I can view items for sale.
4. As a user, I can add items to a shopping cart.
5. as a user, I can remove items from a shopping cart.
6. as a user, I can purchase items in my cart.

## References Used

(___TODO__: List any tutorials or material referenced that you've based your code off of_)

## Authors
- Michael Salamon, Xin Chen, Janice Ma, Orion Cadri
