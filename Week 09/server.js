const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk.toString());
  }).on('end', () => {
    // body = Buffer.from(body).toString();
    console.log('body: ', body);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`
    <html maaa=a >
      <header>
        <style>
          div div #myid{
            width:100px;
            background-color:#ff2222;
          }
          body div img{
            width:30px;
            background-color:#ff1111;
          }
        </style>
      </header>
      <body>
          <div>
            <img id="myid"/>
            <img/>
          <div>
      </body>
    </html>
    `);
  });
}).listen(8088, () => {
  console.log('Server started on port: 8088')
});
