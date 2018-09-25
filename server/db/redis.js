const url = require('url');
const { createClient } = require('redis');
const log = require('../helpers/log');
const config = require('config');

let redisClient = null;
// const connectRedis = require('connect-redis');

// todo: check if session will be stored in redis
// module.exports = (Session) => {
//   const redisClient = createClient({
//     host: config.get('database.session.host'),
//     port: config.get('database.session.port'),
//     prefix: config.get('database.session.prefix'),
//     disableTTL: true,
//   });
//   const RedisStore = connectRedis(Session);
//   return new RedisStore({ client: redisClient });
// };

const redisURL = url.parse(config.get('db.redis.url'));

function onError(err) {
    redisClient = null;
    log.error(`RedisLabs connection error: ${err}`);
}

function onConnect() {
    log.dev('Connected to RedisLabs!');
}

function onReconnecting() {
    log.dev('Reconnected to RedisLabs!');
}

function onEnd() {
    redisClient = null;
    log.dev('Connection to RedisLabs closed');
}

function onSIGINT() {
    redisClient.quit(function () {
        redisClient = null;
        log.dev('RedisLabs default connection disconnected through app termination');
        process.exit(0);
    });        
}

function createInstance() {
    if (redisClient) return redisClient;

    redisClient = createClient({
        host: redisURL.hostname,
        port: redisURL.port,
        retry_strategy: () => config.get('db.redis.retryStrategy')
    });

    redisClient.auth(redisURL.auth.split(':')[1]);

    redisClient.on('error', onError);
    redisClient.on('connect', onConnect);
    redisClient.on('reconnecting', onReconnecting);
    redisClient.on('end', onEnd);

    process.on('SIGINT', onSIGINT);

    return redisClient;    
}

module.exports = createInstance