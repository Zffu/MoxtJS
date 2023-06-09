const crypto = require("crypto")

class MoxtJSBuild {
    constructor(path) {
        this.path = path;
        this.start_timestamp = new Date().getTime();
        this.build_uuid = crypto.randomUUID();
        this.state = "CHEKING_CAN_COMPILE"
        this.build_sucess = false;
        this.pages = []
    }
    end(sucess) {
        this.build_sucess = sucess;
        this.stop_timestamp = new Date().getTime()
        if(sucess) {
            this.state = "STOPPED_SUCESS"
        }
        else {
            this.state = "STOPPED_FAILED"
        }
    }

}

module.exports = {MoxtJSBuild}