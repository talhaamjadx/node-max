const express = require('express');

const path = require("path")

const rootDir = require('../utils/index');

const router = express.Router();

router.get('/add-name', (req, res, next) => {
	res.sendFile(path.join(rootDir,'views','add-name.html'))
})

router.post('/names', (req, res, next) => {
	console.log("in here", req.body.name)
	res.redirect('/')
})

module.exports = router;