const { User } = require('../../src/db/models');


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
    res.status(200).json(req.body); //sendStatus(200);
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
  editUser,
  getUser,
  deleteUser
}
