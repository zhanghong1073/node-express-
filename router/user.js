const express = require('express');

const router = express.Router();

router.post('/users/login', async (req, res, next) => {
  try {
    res.send('/users/login')
  } catch (error) {
    next(error)
  }
})

router.post('/users', async (req, res, next) => {
  try {
    res.send('/users')
  } catch (error) {
    next(error)
  }
})



module.exports = router;