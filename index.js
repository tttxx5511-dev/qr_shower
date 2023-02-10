var QRCode = require('qrcode');
    
QRCode.toString('https://jd.com', { type: 'terminal' }, function (err, data) {
  console.log(data);
}); 