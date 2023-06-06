const crypto = require("crypto")

class MoxtJSBuild {
    constructor(path) {
        this.path = path;
        this.start_timestamp = new Time().getTime();
        this.build_uuid = crypto.randomUUID();
        this.state = "CHEKING_CAN_COMPILE"
        this.build_sucess = false;
    }
    end(sucess) {
        this.build_sucess = sucess;
        this.stop_timestamp = new Time().getTime()
        if(sucess) {
            this.state = "STOPPED_SUCESS"
        }
        else {
            this.state = "STOPPED_FAILED"
        }
    }

}

module.exports = {MoxtJSBuild}