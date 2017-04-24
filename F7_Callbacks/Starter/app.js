function greet(callback) {
    console.log("hello!");
    var data = {
        name: 'John Doe'
    };
    callback(data);
}

greet(function(data) {
    console.log('the callback was invoked!');
    console.log(data);
})

greet(function(data) {
    console.log('a different callback was invoked!');
    console.log(data.name);
})