import string
from collections import *

# Upon running this file, a directory must be provided to some .txt file.
fname = input("Enter the file name: ")
if len(fname) < 1: fname = 'words.txt'
fh = open(fname)



#                                                   INITIALIZATIONS


# keyword lists to classify the articles we want
PRIMARY =   ['corona', 'coronavirus', 'covid19']# We remove all symbols like dash so it's covid19 instead of covid-19.
SECONDARY = ['hospitals', 'cases', 'max', 'capacity', 'spreading', 'infection', 'rate', 'slower', 'faster', 'country',
             'city', 'doctors', 'staff', 'symptoms', 'spread', 'quarantine', 'trend', 'unemployment', 'surge', 'vaccine',
             'treatment', 'social', 'distancing', 'n95', 'mask', 'covering', 'breathing', 'ventilator', 'ventilators', 'death']
BAD =       ['White House', 'president', 'senate', 'federal', 'government', 'democrat', 'republican', 'party', 'election',
             'Constitution', 'Supreme Court']# 'White House' and 'Supreme Court' won't add to the keyword count. 
                                             # Left as is in order to maintain formulas.

# default websites
preferred_websites=['http://www.Look-elsewhere-SORRY.com/',
                    'https://www.vox.com/',
                    'https://www.bbc.com/news',
                    'https://www.sciencenews.org/',
                    'https://www.buzzfeednews.com/',
                    'https://www.theguardian.com/us',
                    'https://www.nbcnews.com/',
                    'https://apnews.com/',
                    'https://www.npr.org/sections/news/']



#                                                   FUNCTIONS


# "PRIMARY:   "  "SECONDARY: "  "BAD:       "
def print_keyword_lists(content_describe1, example_list1, content_describe2, example_list2, content_describe3, example_list3):
    printNEAT(content_describe1, example_list1)
    printNEAT(content_describe2, example_list2)
    printNEAT(content_describe3, example_list3)

def printNEAT(content_describe, example_list):# prints 5 elements per line
    if (len(example_list)) <= 5:
        print(content_describe)
        for i in (range(len(example_list))):
            print(example_list[i], end =" ")
        print('\n')
    else:
        print(content_describe)
        rows=(len(example_list))//5
        if (len(example_list))/5.0 > rows:
            rows=rows+1
        for i in range(rows*5):
            if i>((len(example_list))-1):
                break
            elif ((i+1)%5) == 0:
                print(example_list[i])
            else:
                print(example_list[i], end =" ")
        print()

def classify_article(example_list1, example_list2, example_list3, url):
    list = []
    biglist = []
    bigcount = 0
    for line in fh:
        words = (line.rstrip().lower()).translate(str.maketrans('', '', string.punctuation)).split()
        for word in words:
            biglist.append(word)
            bigcount = bigcount + 1
            if word in list:
                continue
            else:
                list.append(word)
    list.sort()
    biglist.sort()

    # print('\n...THIS ARTICLE HAS', bigcount, 'WORDS...\n')  # WORD COUNT

    primword_freq = 0
    for i in range(len(PRIMARY)):
        primword_freq = primword_freq + biglist.count(example_list1[i])
    secword_freq = 0
    for j in range(len(SECONDARY)):
        secword_freq = secword_freq + biglist.count(example_list2[j])
    badword_freq = 0
    for k in range(len(BAD)):
        badword_freq = badword_freq + biglist.count(example_list3[k])

    # print("\nThe number of times a PRIMARY keyword was used:   ", primword_freq)
    # print("The number of times a SECONDARY keyword was used: ", secword_freq)
    # print("The number of times a BAD keyword was used:       ", badword_freq)


    # Here is a formula for a good article:
    if (primword_freq>=1 and secword_freq>=6 and badword_freq<=1):
        print("This article is good!")
        # return the url here!
    # otherwise, give interesting feedback:
    elif(primword_freq>=3 and secword_freq>=10 and badword_freq>=6):
	    print("This article is politics and corona.")
    elif(primword_freq==0 and secword_freq<=2 and badword_freq>=2):
	    print("This article is politics.")
    elif(primword_freq==0 and secword_freq==0 and badword_freq==0):
	    print("This article is irrelevant.")
    else:
        print("This article is a mix of things.")


print_keyword_lists("PRIMARY:   ",PRIMARY, "SECONDARY: ", SECONDARY, "BAD:       ", BAD)
classify_article(PRIMARY, SECONDARY, BAD, 'http://www.Look-elsewhere-SORRY.com/')



# Typical file names for input:
# 59976 - Good Articles/Article-9.txt
# 59976 - Automated Articles/Article-9-test.txt
# 59976 - Bad Articles/Bad-Article-9.txt
# 59976 - Automated Articles/Bad-Article-9-test.txt


# python3 PYT_dictionary.py >> results.txt
# exec(open('hello.py').read())


# Using the homepage of our preferred websites (ex. www.vox.com) and the 
# current date, the NewsAPI will return 20 articles closest to this date. 
# This will be stored in a Looking-for-good.txt file. 
# Each article link will be scraped to a .txt file and run through the 
# PYT_dictionary.py file.  If PYT_dictionary.py returns output 
# "This article is good!", save the link to a results.txt file. 
# Repeat the above steps for the other 7 websites. 
# The final result is a results.txt file with 8 lines. Each line has
# its own link. 

# Some scenarios to account for: 
# Lets say for some preferred website, none of the 20 articles 
# return "This article is good!". If this happens, then iterate 
# through the same 20 articles again, but once there's an output 
# of "This article is a mix of things", then store that link to 
# results.txt and move on. If none of the 20 articles return 
# "This article is a mix of things.", then the default website 
# homepage will be stored as the link. 

# Accounting for those scenarios, I (Michael) decided to make
# a preferred_websites list. If the default website is needed
# for spot 1 in the news section of our website, then just do
# preferred_websites[1]. The zero index will contain a 
# useless string like "http://www.Look-elsewhere-SORRY.com/"

# The results.txt file should go to a folder called:
# Websites-of-the-Week.
# All txt files should go to a folder called:
# Test-Runs-Articles.
# The articles for a given week should be placed
# in a folder, within Test-Runs-Articles,
# with a name of the current date (ex. 12092020)
