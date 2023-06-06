const { findObjectsInObject } = require("moxt.js/utils/objectFinder")
const logger = require("moxt.js/utils/logger")

function compilePageToHTML(path) {
    let functions = findObjectsInObject("function", require(path));

    if(functions.length == 0) {
        logger.warn("No Functions were found in the page " + path)
        return "<html></html>"
    }

    let content = functions[0].call(,)


    return "<html>" + content + "</htm>"
}

module.exports = {compilePageToHTML}