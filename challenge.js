import express from "express";

const app = express();

const date = new Date();
const UrlLogger = (req, res, next) => {
  console.log("path:", req.path);
  next();
};

const dateLogger = (req, res, next) => {
  console.log(
    "Date: ",
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  next();
};

const secLogger = (req, res, next) => {
  if (req.protocol === "http") {
    console.log("SECURE");
  } else {
    console.log("INSECURE");
  }
  next();
};

const proLogger = (req, res, next) => {
  res.send("<h1>Not allow<h1>");
};

const handelGlobal = (req, res) => res.send("<h1>Home</h1>");
const handleProtected = (req, res) => res.send("<h1>Protected</h1>");
app.get("/", UrlLogger, dateLogger, secLogger, handelGlobal);
app.get(
  "/protected",
  UrlLogger,
  dateLogger,
  secLogger,
  proLogger,
  handleProtected
);

// Codesandbox gives us a PORT :)
const handleListening = () =>
  console.log(`Server Listening on http://localhost:4001`);

app.listen(4001, handleListening);
