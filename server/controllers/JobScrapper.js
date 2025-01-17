import puppeteer from "puppeteer";
import fs from "fs/promises";
import CompanyModel from "../models/companyModel.js";
import cron from "node-cron";
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
    let i = 0;
    const AllJobs = [];
    while (i < 3) {
      const url = `https://www.naukri.com/jobs-in-india-${
        i + 1
      }?clusters=functionalAreaGid&functionAreaIdGid=5&functionAreaIdGid=6&functionAreaIdGid=8&functionAreaIdGid=14&functionAreaIdGid=19&ctcFilter=6to10`;

      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 120000,
      });

      // Load local storage from file
      const localStorageData = JSON.parse(
        await fs.readFile(LOCAL_STORAGE_PATH)
      );
      await page.evaluate((data) => {
        for (let key in data) {
          localStorage.setItem(key, data[key]);
        }
      }, localStorageData);

      console.log("Session restored!");

      // scrap the data from naukri.com

      await page.waitForSelector(".cust-job-tuple", {
        timeout: 120000,
      });

      const jobs = await page.evaluate(() => {
        const joblist = document.querySelectorAll(".cust-job-tuple ");
        const jobArray = [];
        for (let i = 0; i < joblist.length; i++) {
          const role = joblist[i].querySelector(".title ")?.innerText || null;
          const companyName =
            joblist[i].querySelector(".comp-name")?.innerText || null;
          const logo = joblist[i].querySelector(".logoImage")?.src || null;
          const experience =
            joblist[i].querySelector(".exp-wrap")?.innerText || null;
          const salary =
            joblist[i].querySelector(".sal-wrap")?.innerText || null;
          const locationString =
            joblist[i].querySelector(".loc-wrap").innerText;
          const location = locationString.split(",").map((loc) => loc.trim());
          const s = joblist[i].querySelectorAll(".tag-li");
          const skills = Array.from(s, (el) => el.textContent);
          const link = joblist[i].querySelector(".title")?.href || null;
          const postedAtText =
            joblist[i].querySelector(".job-post-day")?.innerText || null;
          const postedAt = Number(postedAtText.match(/\d+/)?.[0] || 0);
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
      console.log("Scraped page", i + 1);
      i++;
      AllJobs.push(...jobs);
    }

    await browser.close();

    const sortByPostedAt = AllJobs.sort((a, b) => a.postedAt - b.postedAt);
    const length = sortByPostedAt.length;

    try {
      if (length == 0) {
        console.log("No jobs found");
      } else if (length < 50) {
        await CompanyModel.deleteMany({});
        await CompanyModel.insertMany(sortByPostedAt);
        console.log("Jobs scraped successfully!");
      } else {
        await CompanyModel.deleteMany({});
        await CompanyModel.insertMany(sortByPostedAt.slice(0, 50));
        console.log("Jobs scraped successfully!");
      }
    } catch (error) {
      console.error("Error scraping jobs:", error);
    }
  } catch (error) {
    console.error("Error scraping jobs:", error);
  }
};
// Schedule the scraping task every minute
// cron.schedule("* * * * *", () => {
//   console.log("Scraping task is running...");
//   scrapeJobs();
// });
