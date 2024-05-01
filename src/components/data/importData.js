const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Data = require("../models/dataModel");

dotenv.config({ path: "../../../.env" });
const DB = process.env.mongodb;
mongoose.connect(DB).then(() => console.log("DB connection successful..."));

// read json data
const data = JSON.parse(fs.readFileSync(`${__dirname}/jsondata.json`, "utf-8"));

// load data into mongodb
const loadData = async () => {
  try {
    await Data.create(data);
    console.log("Data loaded successfully🎉");
  } catch (error) {
    console(error);
  }
  process.exit(1);
};

// delete data in mongodb
const deleteData = async () => {
  try {
    await Data.deleteMany();
    console.log("Data deleted successfully🎉");
  } catch (error) {
    console.log(error);
  }
  process.exit(1);
};

if (process.argv[2] === "--import") {
  loadData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
