const express = require('express');
const userRouter = require('./router/users');
const app = express();

app.get('/', function(req, res) {
  const data = {
    id: 1,
    name: 'Imam Sutono'
  };

  res.json(data);
});

app.get('/about', function(req, res) {
  res.redirect('/users');
});

app.use(userRouter);

app.listen(3000, function() {
  console.log('server is okay');
});
