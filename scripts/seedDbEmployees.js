const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tooltracker",
    {useNewUrlParser:true},
    {useUnifiedTopology: true}
);

const employeeSeed = [
    {
        name:"Donald"
    },
    {
        name:"Ilya"
    },
    {
        name:"Eric"
    },
    {
        name:"Elmer"
    },
    {
        name:"Rob"
    },
    {
        name:"Amaris"
    }
]

db.Employee
    .deleteMany({})
    .then(() => db.Employee.insertMany(employeeSeed))
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });