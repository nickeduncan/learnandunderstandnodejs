'use strict'

var Greetr = require('./greetr')

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log(`${ data } greeted!`);
});

greeter1.greet('Tony');