// Copyright 2014, Renasar Technologies Inc.
/* jshint node: true */
"use strict";

var di = require('di'),
    injector = new di.Injector([require('./lib/app')]),
    statsD = injector.get('Statsd');

statsD.start();

process.on('SIGINT', function() {
    statsD.stop();
});


