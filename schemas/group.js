/**
 * Created by iZel on 3/28/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let Group = new Schema({
    name:String,
    createdAt:Date,
    userCreated:{
        type:Schema.ObjectId,
        ref:'User'
    },
    members:[{
        type:Schema.ObjectId,
        ref:'User'
    }]
});

module.exports = mongoose.model('Group',Group)