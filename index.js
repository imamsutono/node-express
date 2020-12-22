const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/about', function(req, res) {
  res.send('About');
});

// Users route
app.get('/users', function(req, res) {
  res.send('Get users');
});
app.post('/users', function(req, res) {
  res.send('Post users')
});
app.put('/users/:id', function(req, res) {
  const id = req.params;
  res.send(id);
});
app.delete('/users/:userId', function(req, res) {
  const id = req.params.userId;
  res.send(id);
});

app.listen(3000, function() {
  console.log('server is okay');
});
