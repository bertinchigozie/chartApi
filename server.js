const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: `${__dirname}/.env` });

// connect to DB
const DB = process.env.mongodb;
mongoose.connect(DB).then(() => {
  console.log("DB CONNECTED...");
});

// load the app
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("App running...");
});
