const WebSocket = require('ws');
const url = require('url');

const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', (client, req) => {
  //const urlParams = url.parse(req.url, true).query;
  console.log('Client connected');
  
  //if(urlParams.targetUrl) {
    //console.log(urlParams.targetUrl)
  //}

  client.on('message', (message) => {
    const uint8ArrayData = new Uint8Array(Buffer.from(message));
    console.log(uint8ArrayData);
  });

  client.on('close', () => {
    console.log('Client disconnected');
  });

});

console.log('WebSocket server is running on port 8080');
