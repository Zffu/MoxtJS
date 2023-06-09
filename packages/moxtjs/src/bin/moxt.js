#! /usr/bin/env node
const path = require("path")
const compiler = require("@moxtjs/compiler-core");
const logger = require("../../utils/logger")



if(process.argv.length < 3) {
    logger.error("Invalid Command Usage! Usage: moxt <command> [path]")
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        logger.error("Invalid Command Usage! Usage: moxt build [path]")
        return;
    }

    let p = process.argv[3];

    logger.log("Compiling path " + p)

    compiler.compiler.compile(p)
    .then(data => {
        logger.log("Build " + data.build_uuid + " finished in " + (data.start_timestamp - data.stop_timestamp) / 1000 + " seconds")
    })
    .catch(data => {
        logger.error("The Build " + data.build_uuid + " could not be built sucessfully!")
    })
        
}