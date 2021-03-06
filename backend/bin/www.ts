#!/usr/bin/env node
process.env.NODE_ENV = "development";
// process.env.proxy = false;

// Module dependencies.
import app from '../app';
import debug from 'debug';
import {Sequelize} from 'sequelize-typescript';
const config = require("../config/config.ts")["default"][process.env.NODE_ENV || "development"];

app.set('port', config.port || 8080);
app.set('env', process.env.NODE_ENV);
const port = app.get('port');
const server: any = app.listen(app.get('port'), () => {
  console.log('Server Listening on ' + server.address().port);
});

// 디비 변경 시 주석 풀고 서버 재시작

/*const sequelize = new Sequelize({
  dialect: config.db.dialect,
  timezone: config.db.timezone,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  models: [__dirname + '/../models']
});
sequelize.sync({
  force: true
});*/

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr : any = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

server.on('error', onError);
server.on('listening', onListening);