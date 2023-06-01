function compilePageToHTML(path) {
    var p = require(path).Page()

    return "<html>" + p + "</htm>"
}

module.exports = {compilePageToHTML}