const express = require('express');
const serveIndex = require('serve-index');
const app = express();

app.use('/', express.static('./dist'))
app.use('/', serveIndex('./dist'))

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(8000, () => console.log('listening on port 8000!'));






const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8001 });

wss.on('connection', function connection(ws) {
    console.log('CONNECTED!!!');
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});