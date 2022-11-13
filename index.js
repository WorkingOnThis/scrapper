import { databaseId, addToDatabase } from "./db/notion.js";
import { obtenerDolarBlue } from "./scrappers/dolar.js";

(async () => {
  // obtenemos el precio del dolar blue
  const precioDolarBlue = await obtenerDolarBlue();
  addToDatabase(
    databaseId,
    "davidjones123",
    "David Jones",
    false,
    null,
    precioDolarBlue
  );
})();
