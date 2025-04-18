const mongoose = require("mongoose");

const todoSchemas = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  status: {
    type: String,
    enum:['active' , 'inactive']
  },
  date : {
      type : Date ,
      default : Date.now,
  }
});


module.exports = todoSchemas