var mysql=require('mysql');
var mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Employee'

});
var index={};
index.all=()=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`select * from employee`,(err,rows,field)=>{
            if(!err){
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        });
    });
}
index.insert=(Name,Salary)=>{
  
    console.log("this is sworking");
    
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`insert  into employee (Name,Salary) values (?,?) `,[Name,Salary],(err,rows,field)=>{
            if(!err){
                console.log("values");
                
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        });
    });
}
index.update=(emp)=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`update employee set Name=? , Salary=? where EmpID=?`,[emp.EmpID,emp.Name,emp.salary],(err,rows,field)=>{
            if(!err){
               resolve(rows);
            }
            else{
                reject(err.message);
            }
        })
    })
}
index.delete=(id)=>{
    return new Promise((resolve,reject)=>{
        mysqlconnection.query(`delete from employee where EmpID =? `,id,(err,rows,field)=>{
            if(!err){
               return resolve(rows);
            }
            else{
               return reject(err.message);
            }
        })
    })
}


module.exports=index;
