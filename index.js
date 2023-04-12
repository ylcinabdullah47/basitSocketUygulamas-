const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');


const app =express();
// public klasörünü kullanımı
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

//mysql bağlantısı 
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"taslak0"
});
connection.connect((err)=>{
    if (err) {
        console.log("mysql bağlantı hatası");
        return;
    }
    console.log("mysql bağlantısı başarılı");
});


  app.get('/form1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });



//   connection.query('SELECT data FROM form', (error, results, fields) => {
//   if (error) throw error;

//   const dataList = results.map(result => JSON.parse(result.data));
  
// //   res.send(dataList);
// });
app.get('/data', (req, res) => {
    connection.query('SELECT data FROM form', (error, results, fields) => {
      if (error) throw error;
    
      const dataList = results.map(result => JSON.parse(result.data));
      
      res.send(dataList);
    });
  });
  

  // Form verilerini alın
  app.get('/form47', (req, res) => {
    const input1 = req.query.input1;
    const input2 = req.query.input2;
    const input3 = req.query.input3;
    const input4 = req.query.input4;
    const input5 = req.query.input5;
    const input6 = req.query.input6;
  
    // Verileri tek bir sütunda saklayın
    const data = `ad:${input1},email:${input2},number:${input3},tel:${input4},datetime${input5},password${input6}`;
    const jsonData = JSON.stringify(data);
  
    // Verileri veritabanına kaydedin
    connection.query(`INSERT INTO form (data) VALUES ('${jsonData}')`, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(`Kayıt başarılı! ID: ${results.insertId}`);
      });
// connection.query(`INSERT INTO form (data) VALUES ('${JSON.stringify(data)},'${jsonData}'')`, (error, results) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     console.log(`Kayıt başarılı! ID: ${results.insertId}`);
//   });
});


// POST isteği işleme
app.post('/form', (req, res) => {
    // tüm form verilerini al
    const formData = req.body;
  
    // JSON formatında veri oluşturma
    const jsonData = JSON.stringify(formData);
  
    // veritabanına kaydetme
    connection.query(`INSERT INTO form (data) VALUES ('${jsonData}')`, (err, result) => {
      if (err) throw err;
      console.log('Form verileri kaydedildi.');
      res.send('Form başarıyla gönderildi.');
    });
  });


app.listen(4000,()=>{
    console.log("4000 portu çalışıyor")
})

 