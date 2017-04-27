var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://nickeduncan:' + configValues.pwd + 
        '@nodetodosample-shard-00-00-s47zn.mongodb.net:27017,nodetodosample-shard-00-01-s47zn.mongodb.net:27017,nodetodosample-shard-00-02-s47zn.mongodb.net:27017/' + 
        configValues.uname + '?ssl=true&replicaSet=nodetodosample-shard-0&authSource=admin';
    }

}