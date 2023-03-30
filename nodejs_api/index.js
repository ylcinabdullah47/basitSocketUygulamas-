const express = require('express');
// const { get } = require('mongoose');
const app = express();
const router = require('./router47');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use('/',router);

// const url ='https://jsonplaceholder.typicode.com/comments?postId=1';
// async function getApi() {
//     const response = await fetch(url,{
//         method:"get"
//     })
//     const data = await response.json();
//     console.log(data);
// }
// getApi();

// app.get('/api',(req,res)=>{
//     // res.status(200).send({message:'bu sayfa get api sayfası'})
//     const  data  =req.body;
//     res.json(data)
// })
// router.get('/users',()=>{
//     console.log("test")
// })


// app.get('/users',(req,res)=>{
//     res.send('test1234')
// })


app.listen(4000,(req,res)=>{
    console.log("4000 portu çalışıyor");
})