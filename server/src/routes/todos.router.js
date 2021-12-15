const router = require('express').Router();
const todoController = require('../controllers/todos.controller');
// const checkAuthor = require('../middlewares/checkAuthor');


router.route('/:id')
  .get(/*checkAuthor,*/ todoController.allTaskId)
  .post(/*checkAuthor,*/ todoController.addTaskId)
  .put(/*checkAuthor,*/ todoController.statusTaskId)
  .patch(/*checkAuthor,*/ todoController.editTaskId)
  .delete(/*checkAuthor,*/ todoController.deleteTaskId);


module.exports = router;
