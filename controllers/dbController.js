const db = require("../models");

module.exports = {

    getTools: function (req, res) {
        db.Tool
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};