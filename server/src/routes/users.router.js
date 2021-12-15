const router = require('express').Router();
const usersController = require('../controllers/users.controller');
// const checkAuth = require('../middlewares/checkAuth'); //todo checkAdmin (только админ можен редактировать)


router.route('/')
  .get(/*checkAuth,*/ usersController.getAllUsers)
  .post(/*checkAuth,*/ usersController.addUser)

router.route('/:id')
  .get(/*checkAdmin,*/ usersController.getUser)
  .patch(/*checkAdmin,*/ /*checkAuth,*/ usersController.editUser)
  .delete(/*checkAdmin*/ usersController.deleteUser);

  
module.exports = router;
