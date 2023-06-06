const fs = require('fs')
const path = require('path');

function doesExists(path) {
    try {
        return fs.existsSync(path)
    } catch(err) {
        return false;
    }
}

function getFilesInFolder(path) {
    fs.readdir(path, (err, files) => {
        return {err: err, files: files}
    })
}

function writeFile(path, content) {
    fs.writeFile(path, content, err => {
        return err;
    })
    return null;
}

module.exports = {doesExists, getFilesInFolder, writeFile}