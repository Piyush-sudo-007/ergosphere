from selenium import webdriver
from bs4 import BeautifulSoup
import time

def scrape_books():
    driver = webdriver.Chrome()
    driver.get("https://books.toscrape.com/")
    time.sleep(3)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    books = []

    for item in soup.select('.product_pod'):
        books.append({
            "title": item.h3.a['title'],
            "author": "Unknown",
            "description": "Sample scraped book description",
            "rating": 4.0,
            "url": item.h3.a['href']
        })

    driver.quit()
    return books