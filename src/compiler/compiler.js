const fs = require('fs')

function compile(path) {
    try {
        if(fs.existsSync(path)) {
            console.log("[ZJS] The Folder Exists!")
            return;
        }
    } catch (err) {
        console.error("[ZJS] The Target Folder was not found!")
    }
}

module.exports = {compile}