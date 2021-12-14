const { Animal, Todo, Task, Action, Category } = require('../db/models');


const getAllAnimal = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true
    });
    return res.status(200).json(animals);
  } catch (error) {
    return res.sendStatus(500);
  }
}


const addAnimal = async (req, res) => {
  if (req.body === undefined)
    return res.sendStatus(400);
  
  const { type, name, breed, sex, age, weight, user_id } = req.body;
  console.log('AAAAA');

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


const getAnimal = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      // raw: true
      where: { user_id: req.params.id }
    });

    return res.status(200).json(animals);

    // return res.status(200).json({
    //   type: animal.type,
    //   name: animal.name,
    //   breed: animal.breed,
    //   sex: animal.sex,
    //   age: animal.age,
    //   weight: animal.weight
    // });
  } catch (error) {
    return res.sendStatus(500);
  }
}


const editAnimal = async (req, res) => {
  try {
    // const { id } = req.params;

    await Animal.update({ ...req.body }, {
      where: { id: req.params.id }
    });
    res.status(200).json(req.body); //sendStatus(200);
  } catch (error) {
    res.sendStatus(424);  //418
  }
}

const deleteAnimal = async (req, res) => {
  try {
    await Animal.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
}


module.exports = {
  getAllAnimal,
  addAnimal,
  getAnimal,
  editAnimal,
  deleteAnimal
}
