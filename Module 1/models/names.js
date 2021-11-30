const fs = require("fs");

const pathDir = require("../utils/index");

const path = require("path");

module.exports = class Name {
    constructor(name) {
        this.name = name
    }
    save() {
        let data = []
        fs.readFile(path.join(pathDir, '.data', 'names.json'), (err, readData) => {
            if (!err)
                data = JSON.parse(readData.toString());
            data = [...data, this]
            fs.writeFile(path.join(pathDir, '.data', 'names.json'), JSON.stringify(data), err => {
                if (err)
                    console.log("Error in writing file!")
                else
                    console.log("File written successfully!")
            })
        })
    }
    static getAll() {
        try {
            return JSON.parse(fs.readFileSync(path.join(pathDir, '.data', 'names.json')).toString())
        }
        catch {
            return []
        }
    }
}