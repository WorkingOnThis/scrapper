import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // vamos a la pagina
  await page.goto("https://dolarhoy.com/");

  // elemento por el que queremos esperar
  const precioDolarBlueSelector =
    "#home_0 > div.modulo.modulo_bloque > section > div > div > div > div.tile.is-parent.is-9.cotizacion.is-vertical > div > div.tile.is-parent.is-5 > div > div.values > div.venta > div.val";
  // esperamos
  await page.waitForSelector(precioDolarBlueSelector);

  // evaluamos la pagina en este momento
  const resultadoValorDolar = await page.evaluate(async () => {
    return document.querySelector(
      "#home_0 > div.modulo.modulo_bloque > section > div > div > div > div.tile.is-parent.is-9.cotizacion.is-vertical > div > div.tile.is-parent.is-5 > div > div.values > div.venta > div.val"
    ).innerText;
  });

  const pasadoANumero = Number(resultadoValorDolar.replace("$", ""));

  console.log(pasadoANumero);
  // // Type into search box.
  // await page.type(".devsite-search-field", "Headless Chrome");

  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = ".devsite-suggest-all-results";
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = ".gsc-results .gs-title";
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate((resultsSelector) => {
  //   return [...document.querySelectorAll(resultsSelector)].map((anchor) => {
  //     const title = anchor.textContent.split("|")[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);

  // // Print all the files.
  // console.log(links.join("\n"));
  // console.log("fin");

  await browser.close();
})();
