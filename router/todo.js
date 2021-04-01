var express=require('express')
var router = express.Router()

var toDoController = require('../controller/todo')

router.get('/test',toDoController.test)

router.get('/getAllList',toDoController.getAllList)

router.post('/createToDoList',toDoController.createToDoList)

router.get('/get/:id',toDoController.getById)

router.put('/update/:id',toDoController.getByIdAndUpadte)

router.delete('/delete/:id',toDoController.delete)

module.exports=router;