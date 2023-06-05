function log(message) {
    console.log("[Muxt] " + message)
}

function error(message) {
    console.error("[Muxt] " + message)
}

function warn(message) {
    console.warn("[Muxt] " + message)
}

module.exports = {log, error, warn}