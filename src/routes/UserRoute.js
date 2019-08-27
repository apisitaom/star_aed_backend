const router = require('express').Router();

// SERVICES
const userService = require('../services/UserService');

router.get('/', (req, res) => {
  res.json('AED USER ROUTE');
});

// REGISTER USER
router.post('/register', userService.userRegister);
// LOGIN USER
router.post('/login', userService.login);

module.exports = router;
