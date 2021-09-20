const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Express');
});

// /user/123?limit=5&skip=10
// {id: '123'}, {limit:'5', skipt:'10'}
// res.status(302).redirect('/);
router.get('/user/:id', function (req, res) {
  console.log(req.params, req.query);
});
module.exports = router;
