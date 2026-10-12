const os = require('os');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || 'dev';

app.get('/', (req, res) => {
  res.send('NodeJS Message No.1!');
});

app.get('/info', (req, res) => {
  res.json({
    message: 'NodeJS Message No.2!',
    port: Number(port),
    version,
    user: os.userInfo().username,
    node: process.version
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
