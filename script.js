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


    // opening the page
    await page.goto('https://feeds.feedburner.com/euronews/en/home/');
    // getting the specific tag content in a list
    let data = await page.$$eval('title', title => {
        return title.map(title => title.textContent);
    });
   
    console.log(data);

    await browser.close();
})();