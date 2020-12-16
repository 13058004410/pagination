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
})


app.get('/huoqu',function(req,res){
    pool.query('select*from jituanrongyu',function(err,result){
        console.log(typeof(result.length));
        res.send(result)
    })
})

