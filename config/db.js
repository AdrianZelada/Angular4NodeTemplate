/**
 * Created by iZel on 3/21/17.
 */
let config={
    name:'mean2',
    url:'mongodb://localhost/'
};


let mongoose = require('mongoose');
mongoose.connect(config.url+config.name);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
    // we're connected!
    console.log('connect db')
});

module.exports = mongoose;