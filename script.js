console.log('working...');

// importing the libs
const { Cluster } = require('puppeteer-cluster');

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);

    page.waitForSelector('title');
    let data = page.$$eval('title', title => {
        return title.map(title => title.textContent);
    });
    console.log(data);
  });  

  cluster.queue('https://feeds.feedburner.com/euronews/en/home/');
  cluster.queue('https://tradingeconomics.com/poland/rss');
  cluster.queue('https://tradingeconomics.com/euro-area/rss');
  cluster.queue('https://tradingeconomics.com/european-union/rss');


  await cluster.idle();
  await cluster.close();
})();