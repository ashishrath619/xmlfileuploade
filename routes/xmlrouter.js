var express = require("express");
var router = express.Router();
const xml2js = require("xml2js");
const xmlParser = require("fast-xml-parser");
var multer = require("./multer");
const fs = require("fs");
var parseString = xml2js.parseString;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("xmluploader", { title: "Xml Uploader" });
});

router.post("/uploadfile", multer.any(), function (req, res, next) {
  var filedata = req.files[0].path;

  console.log("res", req.files[0]);
  fs.readFile(filedata, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    parseString(data, function (err, result) {
      console.log(result);
      file1Data = result;
    });
  });
  res.send("file uploading");
});

module.exports = router;
