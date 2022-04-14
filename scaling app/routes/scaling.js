const express = require('express')
const router = express.Router();
const { scaling} = require('../controller/scaling');

router.post("/scaling", scaling);

module.exports = router;
