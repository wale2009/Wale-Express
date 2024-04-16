const express = require("express");
const router = express.Router();


// router.use("/base", require("./base/base.routes"));
const baseRoutes = require('./base/base.routes');

// Use base routes
router.use('/base', baseRoutes);
module.exports = router;