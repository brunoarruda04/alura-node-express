import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router.get("/books", BookController.getBooks);
router.get("/books/search", BookController.getBookByPublisher);
router.get("/books/:id", BookController.getBookById);
router.post("/books", BookController.postBook);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

export default router;
