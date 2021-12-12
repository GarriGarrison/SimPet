const { Todo, Task, Action, Category } = require('../../src/db/models');


const allTaskId = async (req, res) => {
  const todoid = req.params.id;
  const todos = [];

  try {
    // const todosDB = await Task.findAll({
    //   where: { animal_id: todoid },
    //   include: [{
    //     model: Todo
    //   }]
    // })
    const todosDB = await Todo.findAll({
      // raw: true,
      include: [{
        model: Task,
        where: { animal_id: todoid },
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


module.exports = {
  allTaskId
}
