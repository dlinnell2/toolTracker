const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tooltracker",
    {useNewUrlParser:true},
    {useUnifiedTopology: true}
);

const toolSeed = [
    {
        title: "Power Drill",
        total: 3,
        totalRemaining: 3,
    },
    {
        title: "Impact",
        total: 3,
        totalRemaining: 3,
    },
    {
        title: "Hammer Drill",
        total: 1,
        totalRemaining: 1,
    },
    {
        title: "Pressure Washer",
        total: 2,
        totalRemaining: 2,
    },
    {
        title: "Shop Vac",
        total: 2,
        totalRemaining: 2,
    },
    {
        title: "Cordless Circular Saw",
        total: 1,
        totalRemaining: 1,
    },
    {
        title: "Corded Circular Saw",
        total: 2,
        totalRemaining: 2,
    },
    {
        title: "Sawzall",
        total: 2,
        totalRemaining: 2,
    },
];

db.Tool
    .deleteMany({})
    .then(() => db.Tool.insertMany(toolSeed))
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });