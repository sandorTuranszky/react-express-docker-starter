const debug = require('debug');

const dev = debug(`dev`);
const info = debug(`info`);
const error = debug(`error`);

module.exports = {
  dev,
  info,
  error
};