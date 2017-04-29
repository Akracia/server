
function response (req, next, status, body) {
    var tempCallback = req.callback;
    if (tempCallback) {
        delete req.callback;
        tempCallback(status, body);
    }
    else {
        this.status(status).json(body);
    }
}

module.exports = function () {
    return function (req, res, next) {
        res.response = response;
        next();
    };
};