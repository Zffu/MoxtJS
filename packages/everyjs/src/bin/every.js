#! /usr/bin/env node
const path = require("path")
const compiler = require("../compiler/compiler.js")


if(process.argv.length < 3) {
    console.error("[Every] Invalid Command Usage! : every <command> [path]")
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        console.error("[Every] Invalid Command Usage! : every build <path>")
        return;
    }

    let p = process.argv[3];

    console.log("[Every] Compiling path " + p)

    compiler.compile(p)
        
}