import express, { json } from "express";
import booksRouter from "./routes/books.routes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(json());

// Routes
app.use("/books", booksRouter);

// Start the server
app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
