console.log("router saafsı deneme");

const express = require('express');
const router = express.Router();



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


module.exports = router;
