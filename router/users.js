const express = require('express');
const router = express.Router();

router.route('/users')
  .get(function(req, res) {
    res.send('Get users');
  })
  .post(function(req, res) {
    res.send('Post users')
  });
router.put('/users/:id', function(req, res) {
  const id = req.params;
  res.send(id);
});
router.delete('/users/:userId', function(req, res) {
  const id = req.params.userId;
  res.send(id);
});

module.exports = router;
