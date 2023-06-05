const fs = require('fs')
const path = require('path');
const fileCompiler = require("./pageCompiler.js")


function compile(path) {
    if(canCompile(path)) {
        resetBuildFolder()
        writeDefaultPages()
        compilePages(path)
        console.log("[Shadows] The Build Was Sucessful!")

    }
}


function canCompile(path) {
    try {
        if(fs.existsSync(path)) {
            console.log("[Shadows] Found Target Folder " + path)
            return true;
        }
        else {
            console.error("[Shadows] The Target Folder " + path + " was not found!")
            return false;
        }
    } catch(err) {
        console.error("[Shadows] The Target Folder " + path + " was not found!")
        return false;
    }
}

function resetBuildFolder() {
    try {
        if(fs.existsSync("./public")) {
            console.log("[Shadows] Found Build Folder, Deleting...")
            fs.rmSync(dir, { recursive: true, force: true });
        }
    } catch(err) {

    }
    console.log("[Shadows] Creating Build Folder...")
    fs.mkdirSync("./public");
}

function writeDefaultPages() {
    console.log("[Shadows] Writing Default Pages...")
    fs.writeFile('./public/404.html', "ZJS - 404", err => {
        if (err) {
          console.error("[Shadows] Could not write default page : " + err);
        }
      });
}

function compilePages(p) {
    try {
        if(fs.existsSync(p + "/pages")) {
            console.log("[Shadows] Compiling Pages...")
            fs.readdir(p + "/pages", function (err, files) {
                if (err) {
                    console.log("[Shadows] An Error Occured while trying to compile pages: " + err);
                } 
                
                let pages = []

                files.forEach(function (file) {
                    if(file.endsWith(".js")  || file.endsWith(".ts") || file.endsWith(".tsx")) {
                        pages.push(file)
                    }
                });

                console.log("[Shadows] Found " + pages.length + " pages")
                
                pages.forEach(page => {

                    let p2 = path.join(path.resolve(p) + "/pages", page);
                    
                    let html = fileCompiler.compilePageToHTML(p2)

                    let name = page.split(".")[0]

                    fs.writeFile('./public/' + name + ".html", html, err => {
                        if (err) {
                          console.error("[Shadows] Could not compile page " + name + " : " + err);
                        }
                      });

                })

            });
        }
        else {
            console.log("[Shadows] The pages folder does not exist!")
            return;
        }
    } catch(err) {
        console.log("[Shadows] An Error Occured while trying to compile pages: " + err)
    }
}

module.exports = {canCompile: canCompile, compile: compile}