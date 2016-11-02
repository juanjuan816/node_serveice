'use strict';

const express = require('express');
const helmet = require('helmet');
const compress = require('compression');

const path = require('path');

const webRouter = require('./web_router');

const app = express();


app.set('query parser', 'simple');
app.use('/static', express.static(path.join(__dirname, 'client')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('trust proxy');

app.use(helmet.frameguard('sameorigin'));
app.use(compress());

webRouter(app);

module.exports = app;