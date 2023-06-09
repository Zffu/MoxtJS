
const pageCompiler = require("./pageCompiler.js")
const logger = require("moxt.js/utils/logger")
const fileUtils = require("moxt.js/utils/fileutils")
const crypto = require('crypto');
const MoxtJSBuild = require("./types/build").MoxtJSBuild

var currentBuild = null;

function compile(path) {
    let promise = new Promise((resolve, reject) => {

        currentBuild = new MoxtJSBuild(path)

        if(canCompile(path)) {
            currentBuild.state = "RESETING_BUILD_FOLDER"
            resetBuildFolder()
            currentBuild.state = "GATHERING_PAGES"
            gatherPages()
            currentBuild.state = "COMPILING_PAGES"
            compilePages()
            currentBuild.state = "CREATING_DEFAULT_PAGES"
            addDefaultPages()
            logger.log("The Build was Sucessful")
            currentBuild.end(true)
            resolve(currentBuild)
        } else {
            logger.error("The Website cannot be compiled! Exiting...")
            currentBuild.end(false);
            reject(currentBuild)
        }
    })
    return promise;
}


function canCompile(path) {
    try {
        if(fs.existsSync(path)) {
            logger.log("The Target Folder (" + path + ") was found!")
            return true;
        }
        else {
            logger.error("The Target Folder (" + path + ") was not found!")
            return false;
        }
    } catch(err) {
        logger.error("The Target Folder (" + path + ") was not found!")
        return false;
    }
}

function resetBuildFolder() {
    try {
        if(fs.existsSync("./public")) {
            logger.log("Found Build Folder, Deleting...")
            fs.rmSync(dir, { recursive: true, force: true });
        }
    } catch(err) {

    }
    logger.log("Creating Build Folder...")
    fs.mkdirSync("./public");
}


function gatherPages() {
    if(fileUtils.doesExist(path.join(currentBuild.path, "pages"))) {
        currentBuild.state = "GATHERING_PAGES"
        logger.log("Gathering Pages...")

        fileUtils.getFilesInFolder(path.join(currentBuild.path, "pages")).files.forEach(page => {
            currentBuild.pages.push(path.join(path.join(currentBuild.path, "pages"),page))
        })

        currentBuild.state = "GATHERED_PAGES"
        logger.log("Gathered " + currentBuild.pages.length + " pages")

    }
    else {
        logger.warn("The Page Folder was not found! Skipping...")
        return;
    }
}

function compilePages() {
    currentBuild.pages.forEach(page => {
        let content = pageCompiler.compilePageToHTML(page);
        fileUtils.writeFile(page, content)
    })
}

function addDefaultPages() {
    if(!currentBuild.pages.toString().includes("404")) {
        fileUtils.writeFile("./public/404.html", "<html<body><h1>404 - MoxtJS</h1><body></html>")
    }
}

module.exports = {canCompile: canCompile, compile: compile}