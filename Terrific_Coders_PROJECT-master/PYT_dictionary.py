import string
from collections import *

fname = input("Enter the file name: ")
# This is how you write a comment :).
if len(fname) < 1: fname = 'words.txt'
fh = open(fname)

list = []
biglist = []
bigcount = 0
PRIMARY =   ['corona', 'coronavirus', 'covid19']
SECONDARY = ['hospitals', 'cases', 'max', 'capacity', 'spreading', 'infection', 'rate', 'slower', 'faster', 'country',
             'city', 'doctors', 'staff', 'symptoms', 'spread', 'quarantine', 'trend', 'unemployment', 'surge', 'vaccine',
             'treatment', 'social', 'distancing', 'n95', 'mask', 'covering', 'breathing', 'ventilator', 'ventilators', 'death']
BAD =       ['White House', 'president', 'senate', 'federal', 'government', 'democrat', 'republican', 'party', 'election',
             'Constitution', 'Supreme Court']

def printNEAT(keyword, example):# prints 5 elements per line
    if (len(example)) <= 5:
        print(keyword)
        for i in (range(len(example))):
            print(example[i], end =" ")
        print('\n')
    else:
        print(keyword)
        rows=(len(example))//5
        if (len(example))/5.0 > rows:
            rows=rows+1
        for i in range(rows*5):
            if i>((len(example))-1):
                break
            elif ((i+1)%5) == 0:
                print(example[i])
            else:
                print(example[i], end =" ")
        print()



printNEAT("PRIMARY:   ", PRIMARY)
printNEAT("SECONDARY: ", SECONDARY)
printNEAT("BAD:       ", BAD)

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

# print('...THIS IS A SORTED LIST OF ALL WORDS IN THE INPUT TEXT...\n')  # ALPHABETICAL ORDER: INCLUDE REPITITIONS
# print(biglist)

# print('...THIS IS A SORTED LIST OF UNIQUE WORDS IN THE INPUT TEXT...\n')  # ALPHABETICAL ORDER: DOES NOT INCLUDE REPITITIONS
# print(list)


#These are the word counts for primary, secondary, and bad lists

#allcounts = Counter(biglist)
#print("\n", allcounts)

print('\n...THIS ARTICLE HAS', bigcount, 'WORDS...\n')  # WORD COUNT

primword_freq = 0
for i in range(len(PRIMARY)):
    primword_freq = primword_freq + biglist.count(PRIMARY[i])


secword_freq = 0
for j in range(len(SECONDARY)):
    secword_freq = secword_freq + biglist.count(SECONDARY[j])

badword_freq = 0
for k in range(len(BAD)):
    badword_freq = badword_freq + biglist.count(BAD[k])

print("\nThe number of times a PRIMARY keyword was used:   ", primword_freq)
print("The number of times a SECONDARY keyword was used: ", secword_freq)
print("The number of times a BAD keyword was used:       ", badword_freq)

