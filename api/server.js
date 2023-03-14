const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const FormStore = require("./models/FormModel");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// mongoose collection

mongoose
  .connect(
    "mongodb+srv://mervecoding:evrem1543@cluster0.himqkxc.mongodb.net/kapsulform?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("connected true"))
  .catch((err) => console.log(err));

// Post collection

app.post("/form", async (req, res) => {
  try {
    const newForm = new FormStore({
      name: req.body.name,
      lastname: req.body.lastname,
      teamName: req.body.teamName,
      teamCode: req.body.teamCode,
      email: req.body.email,
      address: req.body.address,
      unis: req.body.unis,
      facultys: req.body.facultys,
      episodes: req.body.episodes,
      classs: req.body.classs,
      graduation: req.body.graduation,
      licence: req.body.licence,
      github: req.body.github,
      linkedin:req.body.linkedin,
      language:req.body.language,
      degree:req.body.degree,
      interest:req.body.interest,
      langEx:req.body.langEx
    
    });
    const form = await newForm.save();
    res.status(200).json(form);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/get",(req,res)=>{
//     FormStore.find().then(forms => res.json(forms))

// })

app.listen(5000, () => {
  console.log("Server Çalıştı");
});
