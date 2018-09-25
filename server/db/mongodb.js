const mongoose = require('mongoose');
const config = require('config');
const log = require('../helpers/log');

mongoose.Promise = Promise;

const dbUser = config.get('db.mongoose.user');
const dbPassword = config.get('db.mongoose.password');
const dbName = config.get('db.mongoose.dbName');
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@shopping-list-cluster-clxgl.mongodb.net/${dbName}?retryWrites=true`

function onError(err) {
  log.error(`MongoDB Atlas connection error: ${err}`);
}

function onConnected() {
  log.dev('Connected to MongoDB Atlas!');
}

function onReconnected() {
  log.dev('MongoDB Atlas reconnected!');
}

function onSIGINT() {
  db.close(function () {
    log.dev('MongoDB Atlas default connection disconnected through app termination!');
    process.exit(0);
  });
}

function connect() {
  mongoose.connect(dbURI, { useNewUrlParser: true, auto_reconnect: true })
  const db = mongoose.connection;
  
  db.on('error', onError);
  db.on('connected', onConnected);
  db.on('reconnected', onReconnected);

  process.on('SIGINT', onSIGINT);  
}

module.exports = connect;