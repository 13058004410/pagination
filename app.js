const express=require('express');
const bodyParser=require('body-parser');
// const { query } = require('express');
const mysql=require('mysql');

var app=express();
app.listen(80,function(){
    console.log('server has started...')
});

app.use(express.static('src'));

app.use(bodyParser.urlencoded({
    extended:false
}));

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:'3306',
    database:'zhejiangwanfeng',
    connectionLimit:20
});


app.get('/huoqu',function(req,res){
    // console.log(req.query.pno);
    var pno=req.query.pno;
    var psize=req.query.psize;
    var count=parseInt(psize);
    // console.log(typeof(count));
    var sql='select*from jituanrongyu limit ?,?';
    var start=(pno-1)*count;
    pool.query(sql,[start,count],function(err,result){
        console.log(result);
        res.send(result)
    })
});



// var ARR=[1,2,3,4];
// var runningSum = function(nums) {
//     var arr=[];   
//     for(var i=0;i<nums.length;i++){
//         if(i=0){
//             arr.push(nums[i]);
//         }else{
//             arr.push(nums[i]+nums[i-1]);
//         }                      
//     }
//     console.log(arr);
//     return arr;   





// };
// runningSum(ARR);
