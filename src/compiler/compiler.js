const fs = require('fs')

function compile(path) {
    if(canCompile(path)) {
        resetBuildFolder()
        writeDefaultPages()
        console.log("[ZJS] The Build Was Sucessful!")

    }
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

function resetBuildFolder() {
    try {
        if(fs.existsSync("./public")) {
            console.log("[ZJS] Found Build Folder, Deleting...")
            fs.rmSync(dir, { recursive: true, force: true });
        }
    } catch(err) {

    }
    console.log("[ZJS] Creating Build Folder...")
    fs.mkdirSync("./public");
}

function writeDefaultPages() {
    console.log("[ZJS] Writing Default Pages...")
    fs.writeFile('./public/404.html', "ZJS - 404", err => {
        if (err) {
          console.error("[ZJS] Could not write default page : " + err);
        }
      });
}

module.exports = {canCompile: canCompile, compile: compile}