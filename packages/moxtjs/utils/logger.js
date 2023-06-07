const chalk = require("chalk")

function log(message) {
    console.log("[Muxt] " + message)
}

function error(message) {
    console.error(chalk.redBright("[Muxt] " + message))
}

function warn(message) {
    console.warn(chalk.yellowBright("[Muxt] " + message))
}

module.exports = {log, error, warn}