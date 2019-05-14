const appRoutes = require('./app_routes');
module.exports = function(app, db){
    appRoutes(app, db);
};