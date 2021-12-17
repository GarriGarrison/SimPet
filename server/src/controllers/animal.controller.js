const { Animal } = require('../db/models');


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
  console.log(req.body);
  if (!req.body)
    return res.sendStatus(400);
  
  const { type, name, breed, sex, age, weight, user_id } = req.body;
  const { HOST, PORT } = process.env;

  if (type && name && breed && sex && age && weight && user_id) {
    if (!req.files || Object.keys(req.files).length === 0) {
      try {
        const addAnimal = await Animal.create({
          type,
          avatar: `${HOST}:${PORT}/uploads/avatar.webp`,
          name,
          breed,
          sex,
          age,
          weight,
          user_id
        });

        return res.status(201).json(addAnimal);
      } catch (err) {
        console.error(err);
        return res.sendStatus(500);
      }
    }

    const sampleFile = req.files.file;
    const fileName = sampleFile.name.split(' ').join('');
    const fullname = `${new Date().getTime()}_${fileName}`;
    const uploadPath = `${process.env.PWD}/public/uploads/`;

    sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      try {
        const addAnimal = await Animal.create({
          type,
          avatar: fullname,
          name,
          breed,
          sex,
          age,
          weight,
          user_id
        });
  
        return res.status(201).json(addAnimal);
      } catch (err) {
        console.error(err);
      return res.sendStatus(500);
      }
    });
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
  } catch (error) {
    return res.sendStatus(500);
  }
}


const editAnimal = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    try {
      await Animal.update({ ...req.body }, {
        where: { id: req.params.id }
      });

      res.status(200).json(req.body); //sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(424);  //418
    }
  }

  const { HOST, PORT } = process.env;
  const sampleFile = req.files.file;
  const fileName = sampleFile.name.split(' ').join('');
  const fullname = `${new Date().getTime()}_${fileName}`;
  const uploadPath = `${process.env.PWD}/public/uploads/`;
  sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {

    if (err) {
      return res.status(500).send(err);
    }

    try {
      await Animal.update({
        ...req.body,
        avatar: `${HOST}:${PORT}/uploads/${fullname}`
      }, {
        where: { id: req.params.id }
      });
      const updateAnimal = await Animal.findByPk(req.params.id)
      res.status(200).json(updateAnimal); //sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(424);  //418
    }
  });
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
