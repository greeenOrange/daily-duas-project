// // app/api/[id]/route.js
// import sqlite3 from "sqlite3";
// import { open } from "sqlite";

// // Initialize it as null initially, and we will assign the actual database instance later.
// let db = null;

// // Define the GET request handler function
// export async function GET(req, res) {
//   // Check if the database instance has been initialized
//   if (!db) {
//     // If the database instance is not initialized, open the database connection
//     db = await open({
//       filename: "./databases/dua_main.sqlite",
//       driver: sqlite3.Database,
//     });
//   }

//   // Extract the ID parameter from the request URL
//   const { id } = req.params;

//   try {
//     // Perform a database query to retrieve a specific item from the "category" table based on the ID
//     const item = await db.get("SELECT * FROM 'category' WHERE id = ?", id);

//     // Check if the item was found
//     if (item) {
//       // Return the item as a JSON response with status 200
//       return new Response(JSON.stringify(item), {
//         headers: { "Content-Type": "application/json" },
//         status: 200,
//       });
//     } else {
//       // Return a 404 Not Found response if the item with the specified ID was not found
//       return new Response("Not Found", { status: 404 });
//     }
//   } catch (error) {
//     // Return a 500 Internal Server Error response if an error occurs
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }


import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function GET(req, res) {
  // Extract the "id" from the URL by splitting the URL and taking the last element
  const id = req.url.split("/").pop();

  // Log the extracted "id" to the console (for debugging purposes)
  console.log(id);

  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./databases/dua_main.sqlite", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve an item based on the id
  const item = await db.get("SELECT * FROM 'category' WHERE id = ?", id);

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(item), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}