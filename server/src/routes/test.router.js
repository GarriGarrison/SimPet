const router = require('express').Router();
const testController = require('../controllers/test.controller');
const { patch } = require('./auth.router');

router.get('/animals', testController.allAnimal);
router.post('/animals', testController.newAnimal);
router.get('/todos/:id', testController.allTaskId);

router.route('/animals')
  .get(testController.allAnimal)
  .post(testController.newAnimal)
  .patch()

// router.get('/', indexController.render);
// router.post('/', indexController.newPost);

// router.get('/logout', indexController.logout);

// router.delete('/:id', indexController.deletePost);
// router.get('/edit/:id', indexController.editRender);
// router.put('/edit/:id', indexController.editPost);

router.get('/', /*checkAuth,*/ usersController.getAllUsers);
router.route('/:id')
  .patch(checkAuth, /*checkAuth,*/ usersController.editUser)
  .get(/*checkAuth,*/ usersController.getUser);


module.exports = router;
