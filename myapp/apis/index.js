var test = require('./test');

module.exports = function (app) {
    app.use('/test', test);
    return app;
};
