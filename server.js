import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { toBuffer } from 'qrcode';
import fetch from 'node-fetch';

function connect(conn, PORT, opts = {}) {
  let app = (global.app = express());
  let server = (global.server = createServer(app));
  let _qr = 'invalid';

  conn.ev.on('connection.update', ({ qr }) => {
    if (qr) _qr = qr;
  });

  app.use(async (req, res) => {
    res.setHeader('content-type', 'image/png');
    res.end(await toBuffer(_qr));
  });

  server.listen(PORT, () => {
    console.log('App listened on port', PORT);
    if (opts.keepalive) keepAlive();
  });

  // Add a ping route to keep the server alive
  app.get('/ping', (req, res) => {
    res.send('Pong!');
  });

  // Set up a cron job to ping the server every 5 minutes
  if (opts.keepalive) {
    const cron = require('node-cron');
    cron.schedule('*/5 * * * *', () => {
      fetch(`http://localhost:${PORT}/ping`).catch(console.error);
    });
  }
}

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  if (/(\/\/|\.)undefined\./.test(url)) return;
  setInterval(() => {
    fetch(url).catch(console.error);
  }, 5 * 1000 * 60);
}

export default connect;