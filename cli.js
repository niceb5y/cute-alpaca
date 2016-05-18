#!/usr/bin/env node
"use strict"

var alpaca = require("./index.js");
var arg =  process.argv.splice(process.execArgv.length + 2);
if (arg.length == 0) {
	console.log(alpaca("알파카"));
} else {
	arg.forEach(function(val) {
		console.log(alpaca(val));
	});
}
