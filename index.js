const express = require('express');
const server = express();
const fs = require('fs');
const { json } = require('node:stream/consumers');
const Events = require('events');
const objectID =require('mongodb').ObjectId //mongodb benzersiz İD oluşturmayı sağlar
const methodOverride =require('method-override');//methodları http isteklerini(get,ppost,delete vb) değiştirmek için kullanılır
const bodyParse =require('body-parser');//gelen verileri javascripte çeviriyor
const { MongoClient } = require('mongodb');
const ejs = require('ejs');

server.use(bodyParse.json()); //json verilerini javascripte çevirme
// server.use(bodyParse.urlencoded({extends:true}));
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'))
server.set('view engine','ejs')
server.set('views', __dirname + '/views');

const Dburl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(Dburl, { useNewUrlParser: true, useUnifiedTopology: true });   

        client.connect();
        console.log("veri tabanı bağlantısı başarılı");
        const db = client.db('proje1');
        const collection = db.collection('proje_1');

        //BURASI SORUNSUZ ÇALIŞIYOR
        // console.log("Collection başarıyla seçildi!");
        // collection.insertOne({isim:"abdullah",soyisim:"üstün"},function(err,res){
        //     if(err) throw err;
        //     console.log("veri yüklendi");
        //     client.close();
        // });
        // const veri=[{isim:"mehmet",soyisim:"nuri"},{isim:"ahmet",soyisim:"bingül"},{isim:"emre",soyisim:"fırça"},{isim:"musfata",soyisim:"pyton"}];
        // collection.insertMany(veri,function(err,res){
        //     if(err) throw err;
        //     console.log("birden fazla veri yüklendş");
        //     client.close();
        // })
        // collection.find({}).toArray(function(err,res){
        //     if(err) throw err;
        //     console.log(res);
        //     client.close();
        // });
        // collection.findOne({isim:"abdullah"},function(err,res){
        //     if(err) throw err;
        //     console.log(res);
        //     client.close();
        // })
        // collection.deleteOne({isim:"mustafa"},function(err,res){
        //     if(err) throw err ;
        //     console.log("kayıt silindi");
        //     client.close();
        // });

        // collection.updateOne(
        //     {isim:"abdullah"},
        //      {$set:{isim:"yanisisim  hayırlı olsun"}})
            //  client.close();
            
//    if (error) {
//         console.log("bağlantı hatası");
    // }finally {
    //     // Bağlantıyı kapatma
    //     // await client.close();
    //     // console.log('MongoDB bağlantısı başarıyla kapatıldı.');
    //   }
      

// connect();
//hatalı alan
// server.get('/',(req,res)=>{
//     collection.find.toArray({err,items}={
//         if(err){
//             console.log("hata oluştu");
//         }else{
//             res.render('app.js',{items:items})
//         }
//     })
// })
 
// collection.insertOne({isim:"abdullah"},function(err,result){
//     console.log("kayıt başarılı");
// })


server.get('/',(req,res)=>{
    collection.find().toArray((err, items) => {
        if (err) {
            console.log("hata oluştu");
        } else {
            res.render('app.ejs', { items: items })
        }
    });
});

server.post('/',(req,res)=>{
    collection.insertOne({name:req.body.name},(err)=>{
        if(err){
            console.log("hata oluştu");
        }else{
            res.redirect('/')
        }
    });
});

server.post('/:id',(req,res)=>{
    if (req.body._method=='put') {
        collection.updateOne({_id: new objectID(req.params.id)},{$set:{name:req.name}},(err)=>{
            if (err) {console.log(err); }
             else{ res.redirect('/');}   
           
           
               
            
        });
    }else if(req.body._method=='delete'){
        collection.deleteOne({_id:new objectID(req.params.id)},(err)=>{
              if(err){
                console.log(err);
              }
              else{
                res.redirect('/')
              }
        });
    }
});






// const {MongoClient} = require('mongodb');

// const Dburl = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(Dburl,{useNewUrlParser: true, trueuseUnifiedTopology: true });   

// async function connect(){
//     try {
//         await client.connect();
//         console.log("bağlantı başarılı");
//         const db = client.db('test47');
//         const collection = db.collection('test4747');
//     } 
//     catch (error) {
//         console.log("bağlantı hatası");
//     }finally {
//         // Bağlantıyı kapatma
//         await client.close();
//         console.log('MongoDB bağlantısı başarıyla kapatıldı.');
//       }
// }

// connect();




//böyle bağlanmay çalışırken hatta oluşuyor
// client.connect((err)=>{
//     if (err) {
//         console.log("Bağlantı başarrılı");
//         return;
//     }
//     console.log(("hata oluştu"));
// })

//events ile basit bir örnek bu konuya daha detaylı bakılacak
    //   class myEmitter extends Events{}
    //   const one1 = new myEmitter()
    //    one1.on('isim',(isim)=>{
    //     console.log(isim);
    //    });
    //    one1.emit('isim','abdullah yalçın')





// const veri = JSON.parse(
//     fs.readFileSync(`${__dirname}/data.json`)
// );

// let url = require('url');
// let adres = 'localhost:3000/sepet.html?siparistutari=50&siparissayisi=3';
// let parsedUrl=url.parse(adres,true);

// server.get('/',(req,res)=>{
//     console.log(parsedUrl.host);
//     console.log(parsedUrl.pathname);
//     console.log(parsedUrl.search);
// });






// server.get('/ulke',(req,res)=>{
//     // res.status(200).send("test başarlı");
//     res.status(200).json({veri})
// });


// server.post('/postveri',(req,res)=>{
//     res.send("veri başarılı bir şekilde yüklendi")
// })

server.listen(3000,()=>{
    console.log("3000 portu dinleniyor");
});