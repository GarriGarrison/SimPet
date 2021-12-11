const router = require('express').Router();
const testController = require('../controllers/test.controller');
// const checkAuto = require('../middleware/checkAuto');


router.get('/animals', testController.allAnimal);
router.get('/todos/:id', testController.allTaskId);

// router.get('/', indexController.render);
// router.post('/', indexController.newPost);

// router.get('/logout', indexController.logout);

// router.delete('/:id', indexController.deletePost);
// router.get('/edit/:id', indexController.editRender);
// router.put('/edit/:id', indexController.editPost);


module.exports = router;
