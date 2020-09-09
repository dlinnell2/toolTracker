var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CheckoutSchema = new Schema({

  toolID: String,
  toolName: String,
  employee: String,
  checkOut: Boolean,
  totalRemaining: Number,

},{
    timestamps : true
});


var Checkout = mongoose.model("Checkout", CheckoutSchema);

module.exports = Checkout;