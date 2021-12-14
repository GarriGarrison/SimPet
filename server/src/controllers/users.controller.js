const bcrypt = require('bcrypt');
const { User } = require('../../src/db/models');
require('dotenv').config();


const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      raw: true,
      attributes: ['id', 'name']
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const addUser = async (req, res) => {
  if (req.body === undefined)
    return res.sendStatus(400);
  
  const saltRounds = Number(process.env.SALT_ROUNDS);
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      const hashedpass = await bcrypt.hash(password, saltRounds);

      const createUser = await User.create({
        // id: Date.now(),  //v4(),
        name,
        email,
        password: hashedpass
      });

      return res.status(201).json({ id: createUser.id, name: createUser.name });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      raw: true,
      where: {
        id,
      },
      attributes: ['id', 'name']
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.sendStatus(500); 
  }
}


const editUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.update({ ...req.body }, {
      where: {
        id,
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.sendStatus(424);  //418
  }
}


const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
}


module.exports = {
  getAllUsers,
  addUser,
  editUser,
  getUser,
  deleteUser
}
