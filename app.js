const express = require("express");
const dataRouter = require("./src/components/routes/dataRoute");
const cors = require("cors");

const app = express();
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
//   next();
// });
app.use("/", dataRouter);

module.exports = app;
