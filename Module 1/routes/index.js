const express = require('express');

const router = express.Router();

const { addNameController, namesController } = require('../controllers/nameControllers');

router.get('/add-name', addNameController)

router.post('/names', namesController)

exports.router = router

