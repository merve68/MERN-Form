const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    teamName: {
      type: String,
      required: true,
    },
    teamCode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    unis: {
      type: String,

    },
    facultys: {
      type: String,
    
    },
    episodes: {
      type: String,

    },
    classs: {
      type: String,
    
    },
    graduation: {
      type: String,
   
    },
    licence: {
      type: String,
     
    },

    github: {
      type: String,
      
    },
    linkedin:{
      type:String
    },
    language:{
      type:String
    },
    degree:{
      type:String
    },
    interest:{
      type:String
    },
    langEx:{
      type:String
    }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormStore", formSchema);
