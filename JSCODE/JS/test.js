const fs = require('fs')
const zlib = require("zlib")

fs.createReadStream('test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("test.txt.gz"))