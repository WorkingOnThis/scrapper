import dotenv from "dotenv";
import cron from "node-cron";
import { updateToPage } from "./db/notion.js";
import { obtenerDolarBlue } from "./scrappers/dolar.js";

dotenv.config();

const pageId = process.env.NOTION_PAGE_ID;

cron.schedule("0 */1 * * * *", async () => {
  const precioDolarBlue = await obtenerDolarBlue();
  updateToPage(pageId, precioDolarBlue);
});
