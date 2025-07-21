const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('input.txt.gz');
const output = fs.createWriteStream('input.txt');

input.pipe(zlib.createGunzip()).pipe(output);