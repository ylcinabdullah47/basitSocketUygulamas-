console.log("app test47");
const { log } = require('console');
const exp = require('constants');
const express =  require('express');
const https =require('https');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/',(req,res)=>{
    let id = Number(req.body.pokemon);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + id ;
    let pokeImg ='https://pokeres.bastionbot.org/images/pokemon/' + id + ".png";
  
    https.get(url,function(response){
        let responseData = "";

        response.on("data",function(dataChunk){
            responseData += dataChunk;
        });
        response.on("end",function(){
            let pokeInfo = JSON.parse(responseData);
            let pokemonName =pokeInfo.name;
            let pokeType =pokeInfo.types[0].type.name;
            // console.log(pokemonName);

            res.write("<h1>Arama sonucunda Pokemon" + pokemonName +"</h1>");
            res.write("<img src=" + pokeImg + ">")
            res.write("<h3>Ana pokemon Türü" +pokeType);
        })
    })

})









app.listen(5000,(req,res)=>{
    console.log("5000 portu çalışıyor");
})