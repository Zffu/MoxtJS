#! /usr/bin/env node

if(process.argv.length < 3) {
    return;
}

const command = process.argv[2]

if(command == "build") {
    if(process.argv.length != 4) {
        return;
    }

    let path = process.argv[3];


}