const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

const sample = {
    title: "Web Development Tutorial",
    channel: "Net Ninja",
    description: { type: String, required: true },
    date: { type: String, required: true },
    tags: ["Javascript", "Web", "React"],
    embedUrl: `https://www.youtube.com/embed/GUEB9FogoP8`,
    playlist: false,
};

async function scrapeYoutube(videoCode, arr, bool) {
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
  const tags = arr;
  const playlist = bool;

  const tutorial = {
    title,
    channel,
    description,
    date,
    embedUrl,
    tags,
    playlist
  }

  console.log(tutorial)
  return tutorial
}

const arr = ["Javascript", "Web", "React"];

module.exports = {
  scrapeYoutube
}
