const { Task, Period, Action, Category, Todo } = require('../../src/db/models');


const {
  PERIOD_NONE,
  PERIOD_DAY,
  PERIOD_WEEK,
  PERIOD_MONTH,
  PERIOD_YEAR,
  PERIOD_ALL
} = process.env;


const getFromCategory = async (periodId, animalId) => {
  const result = [];
  let periodDB;

  try {
    if (periodId === PERIOD_ALL) {
      periodDB = await Task.findAll({
        raw: true,
        where: {
          animal_id: animalId
        },
        include: [{ model: Todo }]
      });
    }
    else {
      periodDB = await Task.findAll({
        raw: true,
        where: {
          period_id: periodId,
          animal_id: animalId
        },
         include: [{ model: Action },
        { model: Category },
        { model: Todo }]
      });
    }

    for (let i = 0; i < periodDB.length; i++) {
      const period = {
        id: periodDB[i].id,
        title: periodDB[i]['Category.title'],
        action: periodDB[i]['Action.title'],
        date: periodDB[i]['Todos.date'],
        time: periodDB[i]['Todos.time'],
        status: periodDB[i]['Todos.status']
      };
      result.push(period);
    }
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}


const getNone = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_NONE, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getDay = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_DAY, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getWeek = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_WEEK, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getMonth = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_MONTH, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getYear = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_YEAR, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const getAll = async (req, res) => {
  const { id } = req.params;

  try {
    const period = await getFromCategory(PERIOD_ALL, id);
    return res.status(200).json(period);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  getNone,
  getDay,
  getWeek,
  getMonth,
  getYear,
  getAll,
}


