
function findObjectsInObject(type, source) {
    let o = []
    Object.keys(source).forEach(object => {
        if(typeof object == type) {
            o.push(object)
        }
    });
    return o;
}

module.exports = {findObjectsInObject}