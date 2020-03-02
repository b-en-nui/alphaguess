from bs4 import BeautifulSoup

import requests

url = "education.yourdictionary.com/for-students-and-parents/100-most-common-sat-words.html"

r = requests.get("http://" + url)

data = r.text

soup = BeautifulSoup(data, features="html.parser")

result = ""

for link in soup.find_all('a'):
    lString = str(link.get('href'))
    if lString.startswith("https://www.yourdictionary.com/"):
        result += "'" + lString.replace('https://www.yourdictionary.com/', '') + "',"
print("[" + result + "]")