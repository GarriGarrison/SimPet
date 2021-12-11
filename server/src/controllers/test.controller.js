const { Animal, Todo, Task, Action, Category } = require('../../src/db/models');


const allAnimal = async (req, res) => {
  let animals;
  
  try {
    animals = await Animal.findAll({
      raw: true
    });
    return res.status(200).json({ animals });
  } catch (error) {
    return res.sendStatus(500);
  }
}

const allTaskId = async (req, res) => {
  const todoid = req.params.id;
  let todosDB;
  const todos = [];

  try {
    todosBD = await Todo.findAll({
      // raw: true,
      include: [{
        model: Task,
        where: { animal_id: todoid },
        include: [{ model: Action },
                  { model: Category }]
      }]
    });

    for (let i = 0; i < todosBD.length; i++) {
      const todo = {
        id: todosBD[i].id,
        date: todosBD[i].date,
        time: todosBD[i].time,
        status: todosBD[i].status,
        action: todosBD[i].Task.Action.title,
        category: todosBD[i].Task.Category.title,
        animalId: todosBD[i].Task.animal_id
      };
      todos.push(todo);
    }

    return res.status(200).json({ todos });
  } catch (error) {
    return res.sendStatus(500);
  }
}


module.exports = {
  allAnimal,
  allTaskId
}
