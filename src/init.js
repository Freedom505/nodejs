import "./db";
import "./models/video";
import app from "./server";

const port = 4000;

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${port}`);

app.listen(port, handleListening);
