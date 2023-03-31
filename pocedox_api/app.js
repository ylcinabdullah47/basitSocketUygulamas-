console.log("pocemon test");
const express = require('express');
const https =require('https');//bunu kullanıyoruz çünkü datamızı çekecez 
const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    // res.sendFile(__dirname + "pocedox_api/index47.html")
})


app.post('/',function (req,res){
    let id = Number(req.body.pokemon)
    let url ="https://pokeapi.co/api/v2/pokemon/" + id;
    console.log(url);
    // const url ='https://pokeapi.co/api/v2/pokemon/';
    // async function postpoke (){
    //     const response = await fetch(urlr,{
    //         method:'post'
    //     })
    //     const data = await response.json()
    //     console.log(data);
    // }
    // postpoke();
})



app.listen(5000,(req,res)=>{
    console.log("5000 portu çalışıyor");
})