import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/youtube");

const db = mongoose.connection;
const handelError = (error) => console.log("DB Error", error);
const handelOpen = () => console.log("Connected to DB");
db.on("error", handelError);
db.once("open", handelOpen);
