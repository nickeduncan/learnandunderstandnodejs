var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'}); // pass as csl
obj.greet.apply({ name: 'Nick Doe'}); // pass as array