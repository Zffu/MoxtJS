#! /usr/bin/env node
const path = require("path")
const compiler = require("../compiler/compiler.js")


if(process.argv.length < 3) {
    console.error("[Shadows] Invalid Command Usage! : shadows <command> [path]")
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        console.error("[Shadows] Invalid Command Usage! : shadows build <path>")
        return;
    }

    let p = process.argv[3];

    console.log("[Shadows] Compiling path " + p)

    compiler.compile(p)
        
}