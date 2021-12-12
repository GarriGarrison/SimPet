const router = require('express').Router();
const animalController = require('../controllers/animal.controller');
// const checkAuthor = require('../middlewares/checkAuthor');


router.route('/animals')
  .get(/*checkAuthor,*/ animalController.getAllAnimal)
  .post(/*checkAuthor,*/ animalController.addAnimal);

router.route('/animals/:id')
  .patch(/*checkAuthor,*/ animalController.editAnimal)
  .delete(/*checkAuthor,*/ animalController.deleteAnimal);
  

module.exports = router;
