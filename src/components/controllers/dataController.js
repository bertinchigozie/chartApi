const fs = require("fs");
const Data = require("../models/dataModel");

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    return res.status(200).send({ status: "success", data });
  } catch (error) {
    if (error) {
      return res
        .status(500)
        .send({ status: "fail", message: "Something went wrong" });
    }
  }
};
