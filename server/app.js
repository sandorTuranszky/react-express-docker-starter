const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

const app = express();

/**
 * When running Express app behind a proxy we need to detect client IP address correctly.
 * For NGINX the following must be configured 'proxy_set_header X-Forwarded-For $remote_addr;'
 * @link http://expressjs.com/en/guide/behind-proxies.html
 */
app.set('trust proxy', true);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

module.exports = app;
