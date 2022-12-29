import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://user:password@alura.dh4ypir.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
