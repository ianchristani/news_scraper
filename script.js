console.log('working...');

// importing the libs
const { channel } = require('diagnostics_channel');
const pup = require('puppeteer');

// function to get the info
(async ()=>{
    // creating the browser instance
    let browser = await pup.launch();
    // creating the page instance
    let page = await browser.newPage();

    // opening the pages
    const sources = [
        'https://feeds.feedburner.com/euronews/en/home/',
        'https://tradingeconomics.com/poland/rss',
        'https://tradingeconomics.com/euro-area/rss',
        'https://tradingeconomics.com/european-union/rss',
    ];
    
    sources.forEach(sourc=>{
        page.goto(sourc);
        page.waitForSelector('title');

        // getting the specific tag content in a list
        let data = page.$$eval('title', title => {
            return title.map(title => title.textContent);
    });
   
    console.log(data);

    browser.close();
    });
    
})();