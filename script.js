console.log('working...');

const { channel } = require('diagnostics_channel');
// importing the lib
const pup = require('puppeteer');

// function to get the info
(async ()=>{
    // creating the browser instance
    let browser = await pup.launch();
    // creating the page instance
    let page = await browser.newPage();


    // opening the pages
    const pages = [
        'https://feeds.feedburner.com/euronews/en/home/',
        'https://tradingeconomics.com/poland/rss',
        'https://tradingeconomics.com/brazil/rss',
        'https://tradingeconomics.com/euro-area/rss',
        'https://tradingeconomics.com/european-union/rss',
    ];
    
    pages.forEach(page ()=>{
        
    });
    await page.goto('https://feeds.feedburner.com/euronews/en/home/');
    // getting the specific tag content in a list
    let data = await page.$$eval('title', title => {
        return title.map(title => title.textContent);
    });
   
    console.log(data);

    await browser.close();
})();