import dotenv from "dotenv";
import { Client } from "@notionhq/client";
// const dotenv = import "dotenv");
// const { Client } = require("@notionhq/client");
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
export const databaseId = process.env.NOTION_DATABASE_ID;

export async function addToDatabase(
  databaseId,
  username,
  name,
  status,
  date,
  precio
) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        ID: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: username,
              },
            },
          ],
        },
        Name: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
        Status: {
          type: "checkbox",
          checkbox: status,
        },
        Date: {
          // Date is formatted as YYYY-MM-DD or null
          type: "date",
          date: date,
        },
        Dolar: {
          type: "number",
          number: precio,
        },
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error.body);
  }
}

export async function updateToPage(pageId, precio) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        Dolar: {
          type: "number",
          number: precio,
        },
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error.body);
  }
}
