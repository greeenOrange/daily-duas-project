import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function GET(req, res) {
  
  if (!db) {
    
    db = await open({
      filename: "./databases/dua_main.sqlite", 
      driver: sqlite3.Database, 
    });
  }
  
  const items = await db.all("SELECT * FROM 'category' LIMIT 0,30"); 
  
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
