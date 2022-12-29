import books from "../models/Book.js";

class BookController {
   // GET ALL THE BOOKS
   static getBooks = (req, res) => {
      books
         .find()
         .populate("author")
         .exec((err, books) => {
            res.status(200).json(books);
         });
   };

   // GET A BOOK BY ID
   static getBookById = (req, res) => {
      const id = req.params.id;
      books
         .findById(id)
         .populate("author", "name")
         .exec((err, books) => {
            if (err) {
               res.status(400).send({ message: `${err.message} - ID not located` });
            } else {
               res.status(200).send(books);
            }
         });
   };

   // REGISTER A NEW BOOK
   static postBook = (req, res) => {
      let book = new books(req.body);
      book.save((err) => {
         if (err) {
            res.status(500).send({ message: `${err.message} - Error registering the book` });
         } else {
            res.status(201).send(book.toJSON());
         }
      });
   };

   // UPDATE A BOOK REGISTERED
   static updateBook = (req, res) => {
      const id = req.params.id;

      books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({ message: "Book updated successfully" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   // DELETE A BOOK REGISTERED
   static deleteBook = (req, res) => {
      const id = req.params.id;
      books.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Book removed successfully" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   static getBookByPublisher = (req, res) => {
      const publisher = req.query.publisher;
      books.find({ publisher: publisher }, {}, (err, books) => {
         res.status(200).send(books);
      });
   };
}

export default BookController;
