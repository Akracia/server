var response = require('./response');

module.exports = function (app) {
    app.use(response());
    return app;
};