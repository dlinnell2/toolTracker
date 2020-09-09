const router = require("express").Router();
const dbController = require("../../controllers/dbController")

router.route("/getTools")
    .get(dbController.getTools);

router.route('/hello')
    .get((req, res) => {
        res.send({ express: 'Connected to server' });
    })

module.exports = router;