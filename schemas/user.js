/**
 * Created by iZel on 3/21/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
});

module.exports=mongoose.model('User',User);