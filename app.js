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
    console.log(req.query.pno);
    var obj=req.query.pno;
    var sql='select*from jituanrongyu limit ?,?';
    var offset=(obj-1)*12;
    pool.query(sql,[offset,12],function(err,result){
        console.log(result);
        res.send(result)
    })
});



