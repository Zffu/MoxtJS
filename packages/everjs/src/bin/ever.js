#! /usr/bin/env node
const path = require("path")
const compiler = require("../compiler/compiler.js")


if(process.argv.length < 3) {
    console.error("[Ever] Invalid Command Usage! : ever <command> [path]")
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        console.error("[Ever] Invalid Command Usage! : ever build <path>")
        return;
    }

    let p = process.argv[3];

    console.log("[Ever] Compiling path " + p)

    compiler.compile(p)
        
}