const router = require('express').Router();
const animalController = require('../controllers/animal.controller');
// const checkAuthor = require('../middlewares/checkAuthor');


router.route('/')
  .get(/*checkAuthor,*/ animalController.getAllAnimal)
  .post(/*checkAuthor,*/ animalController.addAnimal);

router.route('/:id')
  .get(/*checkAuthor,*/ animalController.getAnimal)
  .patch(/*checkAuthor,*/ animalController.editAnimal)
  .delete(/*checkAuthor,*/ animalController.deleteAnimal);
  

module.exports = router;
