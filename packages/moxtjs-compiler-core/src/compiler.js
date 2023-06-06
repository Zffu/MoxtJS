const fs = require('fs')
const path = require('path');
const fileCompiler = require("./pageCompiler.js")
const logger = require("moxt.js/utils/logger")
const crypto = require('crypto');
const MoxtJSBuild = require("./types/build").MoxtJSBuild

var currentBuild = null;

function compile(path) {
    let promise = new Promise((resolve, reject) => {

        currentBuild = new MoxtJSBuild(path)

        if(canCompile(path)) {
            resetBuildFolder()
            writeDefaultPages()
            compilePages(path)
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

function writeDefaultPages() {
    logger.log("Adding Default Pages")
    fs.writeFile('./public/404.html', "MuxtJS - 404", err => {
        if (err) {
          logger.erorr("Could not add Default Pages: " + err)
          return false;
        }
      });
}

function compilePages(p) {
    try {
        if(fs.existsSync(p + "/pages")) {
            logger.log("Detected Pages, Building Pages..")
            fs.readdir(p + "/pages", function (err, files) {
                if (err) {
                     console.error("An Error while trying to compile pages: " + err)
                } 
                
                let pages = []

                files.forEach(function (file) {
                    if(file.endsWith(".js")  || file.endsWith(".ts") || file.endsWith(".tsx")) {
                        pages.push(file)
                    }
                });

                logger.info("Found " + pages.length + " pages")
                
                pages.forEach(page => {

                    let p2 = path.join(path.resolve(p) + "/pages", page);
                    
                    let name = page.split(".")[0]

                    fileCompiler.compilePageToHTML(p2)
                    .then((data) => {
                        fs.writeFile('./public/' + name + ".html", html, err => {
                            if (err) {
                              logger.error("Could not compile page " + name + "!")
                            }
                        });
                    })

                })

            });
        }
        else {
            console.warn("The Pages were not detected! Skipping...")
            return true;
        }
    } catch(err) {
        console.error("An Error Occured while compiling pages: " + err)
    }
}

module.exports = {canCompile: canCompile, compile: compile}