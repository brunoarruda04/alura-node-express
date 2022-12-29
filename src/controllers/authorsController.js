import authors from "../models/Author.js";

class AuthorController {
   // GET ALL THE AUTHORS
   static getAuthors = (req, res) => {
      authors.find((err, authors) => {
         res.status(200).json(authors);
      });
   };

   // GET A AUTHOR BY ID
   static getAuthorById = (req, res) => {
      const id = req.params.id;
      authors.findById(id, (err, authors) => {
         if (err) {
            res.status(400).send({ message: `${err.message} - ID not located` });
         } else {
            res.status(200).send(authors);
         }
      });
   };

   // REGISTER A NEW AUTHOR
   static postAuthor = (req, res) => {
      let author = new authors(req.body);
      author.save((err) => {
         if (err) {
            res.status(500).send({ message: `${err.message} - Error registering the author` });
         } else {
            res.status(201).send(author.toJSON());
         }
      });
   };

   // UPDATE A AUTHOR REGISTERED
   static updateAuthor = (req, res) => {
      const id = req.params.id;

      authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({ message: "Author updated successfully" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };

   // DELETE A AUTHOR REGISTERED
   static deleteAuthor = (req, res) => {
      const id = req.params.id;
      authors.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Author removed successfully" });
         } else {
            res.status(500).send({ message: err.message });
         }
      });
   };
}

export default AuthorController;
