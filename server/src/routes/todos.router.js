const router = require('express').Router();
const todoController = require('../controllers/todos.controller');
// const checkAuthor = require('../middlewares/checkAuthor');


router.route('/todos/:id')
  .get(/*checkAuthor,*/ todoController.allTaskId)
  // .post(/*checkAuthor,*/ todoController.addTaskId)
  // .patch(/*checkAuthor,*/ todoController.editTaskId)
  // .delete(/*checkAuthor,*/ todoController.deleteTaskId);


module.exports = router;
