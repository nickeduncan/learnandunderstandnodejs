var util = require('util')

var name = 'Nick'
var greeting = util.format('Hello, %s', name);
util.log(greeting);