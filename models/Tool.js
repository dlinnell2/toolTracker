var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ToolSchema = new Schema({

  title: String,
  total: Number,
  totalRemaining: Number,

},{
    timestamps : true
});


var Tool = mongoose.model("Tool", ToolSchema);

module.exports = Tool;