const fs = require('fs')

function compile(path) {


}


function canCompile(path) {
    const promise = new Promise((resolve, reject) => {
        try {
            if(fs.existsSync(path)) {
                resolve({failed: false, message: "The Target Folder Exists!"})
            }
        }
        catch(error) {
            reject({failed: true, message: "The Target Folder does not Exist!"})
        }
    })
}

module.exports = {canCompile: canCompile, compile: compile}