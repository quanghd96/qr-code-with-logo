const express = require('express');
const app = express();
const port = 3000;
require('babel-polyfill');
const brandedQRCode = require('branded-qr-code');

app.get('/', async (req, res) => {
    const img = await brandedQRCode.generate({ text: 'https://www.google.com', path: __dirname + '/ubuntu.png' });
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.end(img);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))