
const { channel } = require('diagnostics_channel');
// importing the lib
const pup = require('puppeteer');

// function to get the info
async function scraper(param){
    // creating the browser instance
    let browser = await pup.launch();
    // creating the page instance
    let page = await browser.newPage();

    // opening the page
    await page.goto(param);
    // getting the specific tag content in a list
    let data = await page.$$eval('title', title => {
        return title.map(title => title.textContent);
    });
   
    news.push(data);    
    await browser.close();
    data = data.slice(1,data.length-1);
    console.log(data);
};

const sources = [
  'https://feeds.feedburner.com/euronews/en/home/',
  'https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml',
  'https://finance.yahoo.com/news/rssindex',
];

let news = [];

sources.forEach(source =>{
  scraper(source);
});