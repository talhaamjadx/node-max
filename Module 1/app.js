const express = require("express");

const path = require("path");

const app = express();

const { router } = require('./routes/index');

const namesClass = require('./models/names');

const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	console.log(namesClass.getAll())
	res.sendFile(path.join(__dirname,'views','index.html'))
})

app.use(router);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views','404.html'))
})

app.listen(4000, () => console.log("Server is running on port 4000"))