const fs = require('fs')

function compile(path) {


}


function canCompile(path) {
    try {
        if(fs.existsSync(path)) {
            console.log("[ZJS] Found Target Folder " + path)
            return true;
        }
        else {
            console.error("[ZJS] The Target Folder " + path + " was not found!")
            return false;
        }
    } catch(err) {
        console.error("[ZJS] The Target Folder " + path + " was not found!")
        return false;
    }
}

module.exports = {canCompile: canCompile, compile: compile}