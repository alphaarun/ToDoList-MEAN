var mongoose = require('mongoose')
var Schema=mongoose.Schema


var ToDoSchema = new Schema({
    'title'     : {required:true, type:String, max:50},    
    'dueByDate' : {required:true, type:Date }, 
    'createdOn' : {required:true, type:Date},    
    'status'    : {required:true, type:String},    
    'active'    : {required:true, type:Boolean},    
    'userName'  : {required:true, type:String, max:50}
});

module.exports = mongoose.model('ToDoSchema',ToDoSchema)