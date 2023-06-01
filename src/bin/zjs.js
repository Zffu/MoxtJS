#! /usr/bin/env node

const compiler = require("../compiler/compiler.js")


if(process.argv.length < 3) {
    console.error("[ZJS] Invalid Command Usage! : zjs <command> [path]")
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        console.error("[ZJS] Invalid Command Usage! : zjs build <path>")
        return;
    }

    let path = process.argv[3];

    console.log("[ZJS] Compiling path " + path)

    compiler.canCompile(path)
    .then(data => {
        console.log("[ZJS] " + data.message)
    })
    .catch(data => {
        console.error("[ZJS] " + data.message)
    })
    

}