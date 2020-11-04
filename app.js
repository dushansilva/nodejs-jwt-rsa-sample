const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./key.pem', 'utf8')
const publicKey = fs.readFileSync('./cert.pem', 'utf8')

const iss = 'https://localhost:9443/oauth2/token';
const sub = 'dushan';
const aud = 'htpp://dushansilva.com';
const exp = Math.floor(Date.now() / 1000) + (60 * 60);
const algorithm = 'RS256';
const payload = {
    iss, sub, aud, exp
};
const token = jwt.sign(payload, privateKey, { algorithm });
console.log(token);

jwt.verify(token, publicKey, function (err, decoded) {
    if (err) {
        console.log('error when veryfying', err);
    }
    console.log(decoded);
});