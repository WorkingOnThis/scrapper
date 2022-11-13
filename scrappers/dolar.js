import puppeteer from "puppeteer";
import {
  DOLAR_BLUE_SELECTOR,
  URL_DOLAR_HOY,
} from "../utils/pagina-dolar-hoy.js";

export const obtenerDolarBlue = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // vamos a la pagina
  await page.goto(URL_DOLAR_HOY);

  // esperamos
  await page.waitForSelector(DOLAR_BLUE_SELECTOR);

  // evaluamos la pagina en este momento y obtenemos el valor del dolar en string
  const resultadoValorDolar = await page.evaluate(
    async (DOLAR_BLUE_SELECTOR) => {
      return document.querySelector(DOLAR_BLUE_SELECTOR).innerText;
    },
    DOLAR_BLUE_SELECTOR
  );

  // formateamos el resultado
  const precioFormateado = Number(resultadoValorDolar.replace("$", ""));

  // cerramos el navegador
  await browser.close();

  return precioFormateado;
};
