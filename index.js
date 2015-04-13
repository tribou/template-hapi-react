var Hapi = require('hapi');
var requireDir = require('require-directory');
var Config = requireDir(module, './config');

// Create a new server
var Server = new Hapi.Server();

// Setup the server with a host and port
Server.connection(Config.env.getConnection());

// Add server routes
Server.route(Config.routes);

//Start the server
Server.start(function () {

  //Log to the console the host and port info
  console.log('Server started at: ' + Server.info.uri);
});
