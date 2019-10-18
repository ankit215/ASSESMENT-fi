var db=require('./database');
var express=require('express');
var app=express();
const bodyParser = require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false});
var router=express.Router();


router.get('/select',async (req,res,next)=>{
    try{
   var result=await db.all();
   res.send(result);
}catch(e){
   res.send(e.message);
    
}
   
});
app.use(bodyParser.json());
router.post('/insert',async (req,res,next)=>{
   
   var Name=req.body.Name;
   var Salary=req.body.Salary;
console.log(Name)
console.log(Salary)
    try{
   var result=await db.insert(Name,Salary);
   res.send(result);
}catch(e){
   res.send(e.message);
    
}
   
})
router.put('/update/:EmpID',async (req,res,next)=>{
   const data={
      EmpID:req.params.EmpID,
      Name:req.body.Name,
      Salary:req.body.Salary
   }
  
   console.log(data)
    try{
   var result=await db.update(data);
   res.send(result);
}catch(e){
   res.send(e.message);
    
}
   
})
router.delete('/delete/:EmpID',async (req,res,next)=>{
   var id=req.params.EmpID
    try{
   var result=await db.delete(id);
   res.send(result);
}catch(e){
   res.send(e.message);   
} 
})
module.exports=router;