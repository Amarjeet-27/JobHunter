import puppeteer from "puppeteer";
import fs from "fs/promises";
import CompanyModel from "../models/companyModel.js";

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
      const joblist = document.querySelectorAll(".cust-job-tuple ");
      const jobArray = [];
      for (let i = 0; i < Math.min(20, joblist.length); i++) {
        const role = joblist[i].querySelector(".title ")?.innerText || null;
        const companyName =
          joblist[i].querySelector(".comp-name")?.innerText || null;
        const logo = joblist[i].querySelector(".logoImage")?.src || null;
        const experience =
          joblist[i].querySelector(".exp-wrap")?.innerText || null;
        const salary = joblist[i].querySelector(".sal-wrap")?.innerText || null;
        const locationString = joblist[i].querySelector(".loc-wrap").innerText;
        const location = locationString.split(",").map((loc) => loc.trim());

        // const description = joblist[i].querySelectorAll(".row4").innerText || null;
        const s = joblist[i].querySelectorAll(".tag-li");
        const skills = Array.from(s, (el) => el.textContent);
        const link = joblist[i].querySelector(".title")?.href || null;
        const postedAt =
          joblist[i].querySelector(".job-post-day")?.innerText || null;

        jobArray.push({
          companyName,
          role,
          logo,
          experience,
          salary,
          location,

          skills,
          link,
          postedAt,
        });
      }
      return jobArray;
    });

    // await CompanyModel.insertMany(jobs);
    console.log("Jobs scraped successfully!");
    await browser.close();
  } catch (error) {
    console.error("Error scraping jobs:", error);
  }
};
