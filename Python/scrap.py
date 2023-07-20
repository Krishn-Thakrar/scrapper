'''import requests
from bs4 import BeautifulSoup
url = "https://www.goibibo.com/hotels/find-hotels-in-Gandhinagar%20District,%20India/2954088108411965148/2954088108411965148/%7B%22ci%22:%2220230711%22,%22co%22:%2220230712%22,%22r%22:%221-1-0%22%7D/?{%22filter%22:{}}&sec=dom&cc=IN&type=region&"
r = requests.get(url)
htmlContent = r.content
print(htmlContent)'''
import pandas as pd
import requests
from bs4 import BeautifulSoup
import numpy as np

headers = {'User-Agent': 'Mozilla/5.0 (Windos NT 6.3; x64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36'}
webpage=requests.get('https://www.booking.com/searchresults.en-gb.html?ss=Gandhinagar&ssne=Gandhinagar&ssne_untouched=Gandhinagar&label=hotels-english-en-india-0opMCKCbP8uMjrHedeEzMAS433577572936%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-33469910%3Alp1007753%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=4f465bd0bc078de100c9ca2c2d58fc5d&aid=309654&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-2095816&dest_type=city&checkin=2023-07-29&checkout=2023-07-30&group_adults=2&no_rooms=1&group_children=0', headers=headers).text


soup=BeautifulSoup(webpage, "html.parser")


names = soup.find_all("div",class_="fcab3ed991 a23c043802")


print(names)

rating = soup.find_all("div",class_="b5cd09854e d10a6220b4")

price = soup.find_all("span",class_="fcab3ed991 fbd1d3018c e729ed5ab6")

persons_availabla = soup.find_all("div",class_="d8eab2cf7f c90c0a70d3")

hotel_name=[]
hotel_rating=[]
hotel_prices=[]
available_persons=[]


# hotel names

for i in names:
  Name = i.text
  hotel_name.append(Name)

print(hotel_name)



# hotel ratings

for j in rating:
  Rate = j.text
  hotel_rating.append(Rate)

print(hotel_rating)


for i in price:
      Price = i.text
      hotel_prices.append(Price)

print(hotel_prices)


for i in persons_availabla:
      Person = i.content
      available_persons.append(Person)

print(available_persons)

print(len(hotel_name))
print(len(hotel_rating))
print(len(hotel_prices))



df = pd.DataFrame({"hotel_Name":hotel_name ,"hotel_price":hotel_prices})
print(df)

df.to_csv("C:/Users/User/Desktop/hotel_dekho_yar.csv", encoding='utf-8')
