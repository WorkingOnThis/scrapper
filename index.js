import { databaseId, addToDatabase } from "./db/notion.js";
import { obtenerDolarBlue } from "./scrappers/dolar.js";
import cron from "node-cron";

cron.schedule("0 */1 * * * *", async () => {
  const precioDolarBlue = await obtenerDolarBlue();
  addToDatabase(
    databaseId,
    "davidjones123",
    "David Jones",
    false,
    null,
    precioDolarBlue
  );
});
