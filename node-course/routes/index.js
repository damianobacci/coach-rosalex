const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Route 1");
});

router.get("/users", (req, res, next) => {
  res.send("Route 2");
});

module.exports = router;
