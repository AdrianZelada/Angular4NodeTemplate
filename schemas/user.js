/**
 * Created by iZel on 3/21/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
    category:String,
    groupsCreate:[{
        type:Schema.ObjectId,
        ref:'Group'
    }],
    groups: [{
        type:Schema.ObjectId,
        ref:'Group'
    }]
});

module.exports=mongoose.model('User',User);