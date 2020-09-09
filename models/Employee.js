var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

  name: String,
  checkouts: [String]

},{
    timestamps : true
});


var Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;