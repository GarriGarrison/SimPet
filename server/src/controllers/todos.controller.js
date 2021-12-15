const { Todo, Task, Action, Category } = require('../db/models');


const allTaskId = async (req, res) => {
  const { id } = req.params;
  const todos = [];

  try {
    // const todosDB = await Task.findAll({
    //   where: { animal_id: id },
    //   include: [{
    //     model: Todo
    //   }]
    // })
    const todosDB = await Todo.findAll({
      // raw: true,
      include: [{
        model: Task,
        where: { animal_id: id },
        include: [{ model: Action },
                  { model: Category }]
      }]
    });

    for (let i = 0; i < todosDB.length; i++) {
      const todo = {
        id: todosDB[i].id,
        date: todosDB[i].date,
        time: todosDB[i].time,
        status: todosDB[i].status,
        action: todosDB[i].Task.Action.title,
        category: todosDB[i].Task.Category.title,
        animalId: todosDB[i].Task.animal_id
      };
      todos.push(todo);
    }
    return res.status(200).json(todos);
  } catch (error) {
    return res.sendStatus(500);
  }
}


const addTaskId = async (req, res) => {
  if (!req.body)
    return res.sendStatus(400);
  
  const { action, categoryNum, periodNum, date, time } = req.body;

  if (action && categoryNum && periodNum && date && time) {
    try {
      const { id } = req.params;

      const addAction = await Action.create({
        title: action,
        category_id: categoryNum
      });

      const addTask = await Task.create({
        animal_id: id,
        period_id: periodNum,
        action_id: addAction.id,
        category_id: categoryNum
      });

      const addTodo = await Todo.create({
        date,
        time,
        status: false,
        task_id: addTask.id
      });

      return res.status(201).json({
        id: addTodo.id,
        action: addAction.title,
        categoryNum: addTask.category_id,
        periodNum: addTask.period_id,
        date: addTodo.date,
        time: addTodo.time
      });
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const editTaskId = async (req, res) => {
  if (!req.body)
    return res.sendStatus(400);
  
  try {
    const { id  } = req.params;
    const { action, categoryNum, periodNum, date, time } = req.body;
    console.log(req);

    if (action) {
      const { task_id: taskId } = await Todo.findByPk(id);
      console.log('task_id', taskId);
      
      const { action_id: actionId } = await Task.findOne({
        where: { id : taskId }
      });
       console.log('action_id', actionId);
      
      Action.update({title: action }, {
        where: { id: actionId }
      });
    }

    if (categoryNum) {
      const { task_id: taskId } = await Todo.findByPk(id);
      
      Task.update({ category_id: categoryNum, }, {
        where: {id: taskId}
      });

      const { action_id: actionId } = await Task.findOne({
        where: { id : taskId }
      });

      Action.update({ category_id: categoryNum, }, {
         where: {id: actionId}
      });
    }

    if (periodNum) {
      const { task_id: taskId } = await Todo.findByPk(id);
      
      Task.update({ period_id: periodNum, }, {
        where: {id: taskId}
      });
    }

    if (date) {
      Todo.update({ date, }, {
        where: { id }
      });
    }

     if (time) {
      Todo.update({ time, }, {
        where: { id }
      });
    }
    return res.status(200).json(req.body);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}


const deleteTaskId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("task_id",req.params);
    const { task_id: taskId } = await Todo.findByPk(Number(id));
    const { action_id: actionId } = await Task.findByPk(taskId);

    await Todo.destroy({ where: { id: id } });
    await Task.destroy({ where: { id: taskId } });
    await Action.destroy({ where: { id: Number(actionId) } });

    return res.sendStatus(200);
  }  catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}


module.exports = {
  allTaskId,
  addTaskId,
  editTaskId,
  deleteTaskId
}
