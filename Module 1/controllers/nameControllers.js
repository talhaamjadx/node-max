const namesClass = require('../models/names');

const publicDir = require("../utils/index")

const path = require("path")

exports.addNameController = (req, res, next) => {
	res.sendFile(path.join(publicDir, 'views', 'add-name.html'))
}

exports.namesController = (req, res, next) => {
	const newName = new namesClass(req.body.name)
    newName.save();
	res.redirect('/')
}
