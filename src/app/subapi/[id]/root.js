import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function GET(req, res) {
  const id = req.url.split("/").pop();

  console.log(id);

  if (!db) {
    db = await open({
      filename: "./databases/dua_main.sqlite",
      driver: sqlite3.Database, 
    });
  }

  const item = await db.get("SELECT * FROM 'sub_category' WHERE id = ?", id);
  return new Response(JSON.stringify(item), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}