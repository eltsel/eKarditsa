const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ekarditsa");
const storeSchema = require("../schemas/storeSchema");
const Store = mongoose.model("Store", storeSchema);
const fs = require("fs");
const helpers = require("../serverHelpers/googleNews")
mongoose.set('strictQuery', true);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("se agapaw " + req.query.name + " " + req.query.posotita);
});
app.get("/stores", async (req, res) => {
  try {
    let data = await Store.find({}).sort({ createdAt: -1 });
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.delete("/stores/:id", async (req, res) => {
  try {
    let data = await Store.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/stores", async (req, res) => {
  try {
    console.log(req.body);
    req.body.active = false;
    let creation = await Store.create(req.body);
    res.send(creation);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put("/stores/:id", async (req, res) => {
  try {
    let update = await Store.updateOne({ _id: req.params.id }, req.body.update);
    res.send(update);
  } catch (error) {
    res.status(500).send(error);
  }
});

// send stores's info form
function fileSize(fileSize){

  return fileSize/1024;
}
app.post("/upload", async (req, res) => {
  try {
    const {file} = req.files
      console.log(__dirname)
      if(file.size>1000*1024){
        res.status(400).send("size")
      }
      console.log(file)
      file.mv("./static/uploads/"+file.name)

    res.send("/uploads/"+file.name)
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

app.get('/getNews' ,async(req,res)=>{

  let test = await helpers.getNews();
  res.send(test)
})
app.get('/getRss' ,async(req,res)=>{
  let test = await helpers.getRss();
  res.send(test)
})

module.exports = {
  path: "/api",
  handler: app,
};
