console.log("router saafsı deneme");

const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const {connect}=require('./database')


//tüm kullanıcıları getir
router.get('/users',(req,res)=>{
    res.status(200).send({message:'users get sayfası'})

});
//yeni bir kullanıcı oluştur
router.post('/users',(req,res)=>{
    // res.status(200).send({message:'users post sayfası'})

    if(!req.body.username || !req.body.password){
        return res.status(400).send('geçersiz kimlik bilgileri')
    }
    if(req.body.username === "abdullah" && req.body.password === "123"){
       return res.status(200).send('giriş başarılı')
    }else{
        return res.status(401).send(' kullanıcı adı yada parola yanlış')
    }
});
//belirli kullanıcıları id göre getir
router.get('/users/:id',(req,res)=>{
    res.status(200).send({message:'users get id sayfası'})
});
//belirli kullanıcıyı güncelle
router.put('/users/:id',(req,res)=>{
    res.status(200).send({message:'users put id sayfası'})
});
//belirli kullanıcıyı sil 
router.delete('/users/:id',(req,res)=>{
    res.status(200).send({message:'users delete id sayfası'})
});


// data daki tüm verileri getirmek
router.get('/data',async(req,res)=>{
    const collection = await connect();
    const result = await collection.find({}).toArray();
    res.send(result);
});

//yeni bir kullanıcı oluşurur
router.post('/data',async(req,res)=>{
    const collection = await connect();
    const result = await collection.insertOne(req.body);
    res.send(result);
});

//id göre veri getirme
router.get('/data/:id',async(req,res)=>{
    const id =req.params;
    const collection = await connect();
    const result = await collection.findOne({_id: ObjectId(req.params.id)});
    res.json(result);
});

router.delete('/data/:id',async(req,res)=>{
    const collection = await connect();
    const result = await collection.deleteOne({_id: req.params.id});
    res.send(result);
});

router.put('/data/:id',async(req,res)=>{
    const collection = await connect();
    const result = await collection.updateOne({_id:ObjectId(req.params.id)},{$set:req.body});
    res.send(result)
})


module.exports = router;
