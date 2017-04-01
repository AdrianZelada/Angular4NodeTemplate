/**
 * Created by iZel on 3/28/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Content = new Schema({
    name: String,
    file: String,
    createdAt:Date
});

module.exports=mongoose.model('Content',Content);