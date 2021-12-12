const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const checkAuth = require('../middlewares/checkAuth');


router.get('/', /*checkAuth,*/ usersController.getAllUsers);
router.route('/:id')
  .patch(checkAuth, /*checkAuth,*/ usersController.editUser)
  .get(/*checkAuth,*/ usersController.getUser);

  
module.exports = router;
