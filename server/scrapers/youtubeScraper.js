const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeYoutube(videoCode) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://www.youtube.com/watch?v=${videoCode}`
  await page.goto(url, { waitUntil: "networkidle2" }); 
  const html = await page.evaluate(() => document.body.innerHTML);
  fs.writeFileSync("./test.html", html);
  const $ = cheerio.load(html);

  const title = $("h1.title").text().trim();
  const channel = $("#channel-name a").text();
  const description = $("#description").text().trim();
  const date = $("#date > yt-formatted-string").text();
  const embedUrl = `https://www.youtube.com/embed/${videoCode}`;
  const watchUrl = url;

  const tutorial = {
    title,
    channel,
    description,
    date,
    embedUrl,
    watchUrl
  }

  return tutorial
}

module.exports = {
  scrapeYoutube
}
