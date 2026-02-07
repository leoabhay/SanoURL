const express = require("express");
const Url = require("../Models/url");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.render("home", {
        urls: []
    });
});

module.exports = router;