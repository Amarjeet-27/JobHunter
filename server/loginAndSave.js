import puppeteer from "puppeteer";
import fs from "fs/promises";

const COOKIE_PATH = "cookies.json";
const LOCAL_STORAGE_PATH = "localStorage.json";

// process.env is not working -> showing undefined
const password = process.env.PASSWORD;
const username = process.env.USEREMAIL;
export const loginAndSaveSession = async () => {
  console.log("Logging in and saving session data...", password, username);
  // const browser = await puppeteer.launch({ headless: false });
  // const page = await browser.newPage();

  // const login = "https://www.naukri.com/nlogin/login";
  // // // Go to the website

  // await page.goto(login, { waitUntil: "networkidle2", timeout: 60000 });
  // await page.waitForSelector("#usernameField", { visible: true });
  // await page.type("#usernameField", username);
  // await page.waitForSelector("#passwordField", { visible: true });
  // await page.type("#passwordField", password);

  // await Promise.all([
  //   page.click('[data-ga-track="spa-event|login|login|Save||||true"]'),
  //   page.waitForNavigation({ waitUntil: "networkidle2", timeout: 120000 }),
  // ]);

  // console.log("Login successful!");

  // // Save cookies to a file
  // const cookies = await page.cookies();
  // await fs.writeFile(COOKIE_PATH, JSON.stringify(cookies, null, 2));

  // // Save local storage to a file
  // const localStorageData = await page.evaluate(() => {
  //   let data = {};
  //   for (let key in localStorage) {
  //     data[key] = localStorage.getItem(key);
  //   }
  //   return data;
  // });
  // await fs.writeFile(
  //   LOCAL_STORAGE_PATH,
  //   JSON.stringify(localStorageData, null, 2)
  // );

  // console.log("Session data saved!");
  // await browser.close();
};
