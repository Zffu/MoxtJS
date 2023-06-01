#! /usr/bin/env node

const compiler = require("../compiler/compiler.js")


if(process.argv.length < 3) {
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        return;
    }

    let path = process.argv[3];

    compiler.compile(path)


}