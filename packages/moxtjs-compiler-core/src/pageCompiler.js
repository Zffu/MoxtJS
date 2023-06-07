const objectFinder = require("moxt.js/utils/objectFinder")
const logger = require("moxt.js/utils/logger")

function compilePageToHTML(path) {

    let promise = new Promise((resolve, reject) => {
        let functions = objectFinder.findObjectsInObject("function", require(path));

        if(functions.length == 0) {
            logger.warn("No Functions were found in the page " + path)
            reject({compiled: false, content: ""})
        }
    
        let content = functions[0].call()
    
        resolve({compiled: true, content: content})
    })

    return promise;
}

module.exports = {compilePageToHTML}