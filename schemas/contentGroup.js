/**
 * Created by iZel on 3/28/17.
 */
let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let ContentGroup = new Schema({
    createdAt:Date,
    contentKey:{
        type:Schema.ObjectId,
        ref:'Content'
    },
    groupKey:{
        type:Schema.ObjectId,
        ref:'Group'
    },
    membersDownload:[{
        type:Schema.ObjectId,
        ref:'User'
    }]
});

module.exports=mongoose.model('ContentGroup',ContentGroup);