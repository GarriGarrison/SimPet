const { Animal, Todo, Task, Action, Category } = require('../../src/db/models');


const allAnimal = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true
    });
    return res.status(200).json(animals);
  } catch (error) {
    return res.sendStatus(500);
  }
}


const newAnimal = async (req, res) => {
  if (req.body === undefined)
    return res.sendStatus(400);
  
  const { type, name, breed, sex, age, weight, user_id } = req.body;

  if (type && name && breed && sex && age && weight && user_id) {
    try {
      const addAnimal = await Animal.create(req.body);
      return res.status(201).json(addAnimal);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


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
  allAnimal,
  newAnimal,
  allTaskId
}
