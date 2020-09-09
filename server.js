const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tooltracker",
{ useNewUrlParser: true , useUnifiedTopology: true});

app.listen(port, () => console.log(`Listening on port ${port}`));