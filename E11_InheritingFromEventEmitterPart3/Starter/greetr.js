'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	constructor() {
		super();
		this.greeting = "Hello world!";
	}

	greet(data) {
		console.log(`${ data }: ${ this.greeting }`);
		this.emit('greet', data);
	}
}