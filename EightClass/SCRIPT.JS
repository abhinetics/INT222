const fs = require ('fs');
const http = require ('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream('index.html');
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    }
    );
    rstream.on('end', () => {
        res.end("end");
    }
    );
  

}
);


//! pipe method

// const server =http.createServer();
// server.on('request', (req, res) => {
//     const rstream = fs.createReadStream('index.html');
//     rstream.pipe(res);
// }
// );
// server.listen(3000);