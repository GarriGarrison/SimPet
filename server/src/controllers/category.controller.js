const { Task, Action, Category, Todo } = require('../../src/db/models');

const {
  CATEGORY_FEED,
  CATEGORY_HYGIENE,
  CATEGORY_MEDICAL,
  CATEGORY_CONTACT,
  CATEGORY_CARE,
  CATEGORY_PARTY
} = process.env;


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
        status: categoryDB[i]['Todos.status'],
        createdAt: categoryDB[i]['Todos.createdAt'],
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
    const feed = await getFromCategory(CATEGORY_FEED, id);
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getHygiene = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(CATEGORY_HYGIENE, id);
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getMedical = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(CATEGORY_MEDICAL, id);
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getContact = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(CATEGORY_CONTACT, id);
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getCare = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(CATEGORY_CARE, id);
    return res.status(200).json(feed);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getParty = async (req, res) => {
  const { id } = req.params;

  try {
    const feed = await getFromCategory(CATEGORY_PARTY, id);
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


