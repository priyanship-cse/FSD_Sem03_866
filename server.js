const http = require('http'); // load the http module


http.createServer((req, res) => {

 // 1. tell the browser everthing is okk (status code 200) , and the data is in plain text 


    res.writeHead(200, {'Content-Type': 'text/plain'});

 // 2. write the ananounced text to the body of the page


    res.end('Hello World\n');


    // 3 tell the server that all of the response headers and body have been sent

    response.end();


}).listen(1338);   // 4. tells the server what port to be o 