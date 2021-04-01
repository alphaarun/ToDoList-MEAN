var ToDoSchema=require('../model/todo')

exports.test=function(req,res){
    console.log("Testing Menthod")
    res.send("Welcome to the ToDo App")
}

exports.getAllList= function(req,res){
    console.log("getting All the list")
    ToDoSchema.find(function(err,data){
        if (err) console.log(err)
        res.send(data)
    })
}
exports.createToDoList=function(req,res){
    console.log(req.body)
    var toDoList = new ToDoSchema({
        title     : req.body.title,
        dueByDate : req.body.dueByDate,
        createdOn : req.body.createdOn,
        status    : req.body.status,
        active    : req.body.active,  
        userName  : req.body.userName
    });
    toDoList.save(function(err,data){
        if (err) return next(err)
        res.send("List Created for "+data)
    });
}

exports.getById=function(req,res){
    ToDoSchema.findById(req.params.id, function(err,data){
        if(err) return next(err)
        res.send(data);
    })
}

exports.getByIdAndUpadte=function(req,res){
    ToDoSchema.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,data){
        if(err) return next(err)
        res.send(data);
    })
}

exports.delete=function(req,res){
    ToDoSchema.findByIdAndRemove(req.params.id,function(err,data){
        if(err) console.log(err)
        res.send("Successful Delete");
    })
};