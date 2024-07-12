const mongoose=require('mongoose');
const empSchema=mongoose.Schema({
    empName:String,
    empDepartment:String,
    empExp:String,
    empSalary:Number

})
const EmpData=mongoose.model('employee',empSchema);//here the model name is giiven the name movie because when it reaches mongoosedb it adds an s to it and thus it becomes movies. Hence it is given the name movie.
module.exports=EmpData;

