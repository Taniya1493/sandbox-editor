const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
// IMPORTING ALL THE FILES
const code = require("./api/code");
app.use("/api/code", code);

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "/client/build", "index.html"))
// );

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
