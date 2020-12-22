const express = require('express');
const router = express.Router();

let users = [
  {id: 1, name: 'Imam', email: 'imam@imno.com'},
  {id: 2, name: 'Sutono', email: 'sutono@imno.com'}
];

router.route('/users')
  .get(function(req, res) {
    res.json(users);
  })
  .post(function(req, res) {
    users.push(req.body);
    res.send(users);
  });

router.put('/users/:id', function(req, res) {
  const {id, name, email} = req.params;

  users.filter(user => {
    if (user.id === id) {
      user.id = id;
      user.name = name;
      user.email = email;

      return user;
    }
  });

  res.json(users);
});

router.delete('/users/:userId', function(req, res) {
  const id = req.params.userId;
  users = users.filter(user => user.id !== id);
  res.send(users);
});

module.exports = router;
