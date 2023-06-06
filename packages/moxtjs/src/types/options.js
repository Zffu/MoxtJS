const fileUtils = require("../utils/fileutils")
const path = require("path")

class MoxtJSOptions {
    constructor(p) {
        if(fileUtils.doesExists(path.join(p, "moxtjs.json"))) {
            let config = require(path.join(p, "moxtjs.json"))
            
        }
    }
}