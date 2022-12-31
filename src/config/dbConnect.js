import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://user:password@database.xxxxxxx.mongodb.net/database");

let db = mongoose.connection;

export default db;
