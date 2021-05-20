const express     = require('express');
const {writeFile} = require('fs');
const util        = require('util');
const write       = util.promisify(writeFile);
const puppeteer   = require('puppeteer');

(async () => {
    
    let chrome='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';   
     
    const browser  = await puppeteer.launch({headless:false,executablePath:chrome});
    const page     = await browser.newPage();
    const id       = 'BFH/rec9zWpHX3ZfbjbUi/2021'
    await page.goto('https://airtable.com/shrbVdyVYSgL9OEx1')
    await page.goto('https://www.youtube.com/results?search_query=billboard+top+50+this+week+playlist')
    await page.hover('#playlist-thumbnails')
    await page.click('#playlist-thumbnails')

    
  })();