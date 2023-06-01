#! /usr/bin/env node
const path = require("path")
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

    let p = process.argv[3];

    p = path.join(".", p)

    console.log("[ZJS] Compiling path " + p)

    compiler.compile(p)
        
}