function compilePageToHTML(path) {
    var p = require(path)

    return "<html>" + p + "</htm>"
}

module.exports = {compilePageToHTML}