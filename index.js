const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const data = {
    id: 1,
    name: 'Imam'
  };

  res.json(data);
});

app.get('/about', function(req, res) {
  res.redirect('/users');
});

// Users route
app.route('/users')
  .get('/users', function(req, res) {
    res.send('Get users');
  })
  .post('/users', function(req, res) {
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
