const { Task, Action, Category, Todo } = require('../../src/db/models');


const getFromCategory = async (categoryId, animalId) => {
  const result = [];

  try {
    const categoryDB = await Task.findAll({
      raw: true,
      where: {
        category_id: categoryId,
        animal_id: animalId
      },
      include: [{ model: Action },
        { model: Category },
        { model: Todo }]
    });

    for (let i = 0; i < categoryDB.length; i++) {
      const category = {
        id: categoryDB[i].id,
        title: categoryDB[i]['Category.title'],
        action: categoryDB[i]['Action.title'],
        date: categoryDB[i]['Todos.date'],
        time: categoryDB[i]['Todos.time'],
        status: categoryDB[i]['Todos.status']
      };
      result.push(category);
    }
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}


const getFeed = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(1, id);  // 1 - Feed
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getHygiene = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(2, id);  // 1 - Hygiene
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getMedical = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(3, id);  // 3 - Medical
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getContact = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(4, id);  // 4 - Contact
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getCare = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(5, id);  // 5 - Care
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getParty = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(6, id);  // 6 - Party
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  getFeed,
  getHygiene,
  getMedical,
  getContact,
  getCare,
  getParty
}


