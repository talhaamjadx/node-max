let names = []

const publicDir = require("../utils/index")

const path = require("path")

exports.addNameController = (req, res, next) => {
	res.sendFile(path.join(publicDir, 'views', 'add-name.html'))
}

exports.namesController = (req, res, next) => {
	names.push(req.body.name)
	res.redirect('/')
}

exports.names = names
