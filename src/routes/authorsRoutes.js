import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router.get("/authors", AuthorController.getAuthors);
router.get("/authors/:id", AuthorController.getAuthorById);
router.post("/authors", AuthorController.postAuthor);
router.put("/authors/:id", AuthorController.updateAuthor);
router.delete("/authors/:id", AuthorController.deleteAuthor);

export default router;
