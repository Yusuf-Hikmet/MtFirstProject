//! Connect js: ? cd "D:\Yusuf\Web\WebProject\Node.js\Express\static" 
//!  if Connected js then Connected js Runner:  ? node app.js
require('dotenv').config(); // Tek amacı .env dosyasını okumak

const express = require('express');
const app = express();

const Servers = [
   process.env.NETWORK_CLIENT,
    process.env.NETWORK_SERVER,
    process.env.TEST_SERVER
];

// PUBLIC KLASÖRÜNÜ PAYLAŞ
app.use(express.static('Public')); // Artık herkes buraya erişebilir ve içindekileri görebilir

//! app.use(express.static(KLASÖR ADI));

app.post('/', express.json(), (req, res) => {
    // console.log(req.body.content); // input içeriğini konsola yazdır
    res.json({ success: true }); // İsteğe yanıt gönder F12 Network sekmesinde görebilirsin
    if (!Servers[req.body.ServerType]) return; // Geçersiz seçimse çık
    if (!req.body.content) return; // Boş mesajsa çık
    if (req.body.content.length > 100) return; // Çok uzun mesajsa çık
    if (req.body.ServerType == 1) return; // Server seçilmişse çık (sadece client ve test servera atar)
    
        fetch(Servers[req.body.ServerType],{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: `${req.body.content}`})
        })
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
