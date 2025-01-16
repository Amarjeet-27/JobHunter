import puppeteer from "puppeteer";
import fs from "fs/promises";

const COOKIE_PATH = "cookies.json";
const LOCAL_STORAGE_PATH = "localStorage.json";
export const scrapeJobs = async (url) => {
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Load cookies from file
    const cookies = JSON.parse(await fs.readFile(COOKIE_PATH));
    await page.setCookie(...cookies);

    const url =
      "https://www.naukri.com/jobs-in-india?functionAreaIdGid=22&clusters=functionalAreaGid";
    await page.goto(url, { waitUntil: "networkidle2", timeout: 120000 });

    // Load local storage from file
    const localStorageData = JSON.parse(await fs.readFile(LOCAL_STORAGE_PATH));
    await page.evaluate((data) => {
      for (let key in data) {
        localStorage.setItem(key, data[key]);
      }
    }, localStorageData);

    console.log("Session restored!");

    await page.waitForSelector(".cust-job-tuple", {
      timeout: 120000,
    });

    const jobs = await page.evaluate(() => {
      const jobList = document.querySelectorAll(".cust-job-tuple ");
      const jobArray = [];
      jobList.forEach((job) => {
        const title = job.querySelector(".title ").innerText;
        const companyName = job.querySelector(".comp-name").innerText;

        jobArray.push({ title, companyName });
      });
      return jobArray;
    });

    console.log("Scraping done", jobs);
    await browser.close();
  } catch (error) {
    console.error("Error scraping jobs:", error);
  }
};
