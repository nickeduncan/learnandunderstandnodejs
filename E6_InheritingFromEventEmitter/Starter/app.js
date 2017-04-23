var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "Hello world!";

}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(data + ": " + this.greeting);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(data + ' greeted!');
});

greeter1.greet('Nick');