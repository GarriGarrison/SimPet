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
  console.log(req.body);
  if (!req.body)
    return res.sendStatus(400);
  
  const { type, avatar, name, breed, sex, age, weight, user_id } = req.body;

  if (type && name && breed && sex && age && weight && user_id) {
    if (!req.files || Object.keys(req.files).length === 0) {
      //const newPost = await Post.create({ text, user_id: req.session.userId })
      //res.json({ text: newPost.text })

      if (!avatar) {
        avatar = 'https://yandex-images.clstorage.net/5AD6iM086/939b47W04D/ph4Ugj8rTksEMU3oTrsFv8SOIlhWdkNFq5fH-4Y0zc1YE4AsPt8HrKCCdwZgnIvXLP2Ei0SxC2voCzg3wEJXW-JIWM4kNQFBBTFO5UegDLjPhi1QUmJER_PA3P_fd8DJF1uMJATiJ9WE7Qw3GeLyoWyt3YkT8UEtqjABOrQ5CCa6FgKtPQ0KfAgGEPtmpQat9O8FfmgRRDiql7jrwGy96hpc1lg5-jXnsv4sKDrM4atsjv6cOM0uGZcYK2ymGAA7ljMptyAXClcSMCfkdqAZtPHQCmhXDU8djIGT_NFdrdgYUv1CD8sF87fiDAgx0c6kW4XqvSD9PSemCCdfkQE4CJYSMaYcMQdLAi4p41iFCJTvxz5WRyptHK6xg_v8Xa3BOn3dYizMH9iE1i4WP8zRvH-027kM0R4Plz07d5cFIi6cMiKVBzINbCwTNNZtmAq81M4aXFUvfw2Qu4za-EuY4h5ByGE59zH-qN4LFiXs3bxZpv28FecGC5k7DVe0ECQguTkGlxw8KmUPBCziZZoTjvrpNHZkP2AKhISuxv9ons8qU_xnHdYNwLHVMyEl9dG_QZjfgxTzIhClBjJ3mzMgFaU2K7QFKgdrOSgK22qwC77IxxVTURxcCa24tOrAb5PFHEHgegvTJ8OxwCcvN-7rln24y70s4zcHqC0kTLAuIyuCPimoGD0SQSYPCtRYghi7yuUZa1oDfBurspfTx2ySyytlyWEq6RbshfQJFwLA4qVwg8O7He4sPZAkPHWMMysbpCUEoD8gCmUuOBTebK8NrdnvFXRRK34SoIqJ_dNMntYdSPBaIvYlxKz5FQ8a9dy6UorShhPMJjKRPStYnzsRI7sOGYU5ASdlLzME2myDIK3O9hZESi9MLaqJrtHibI39NlvXfz3kFsKV-Q8fI_b5hlKB5540zAsTrhYZbr8XIzOpEDG7GwgMQjQJBuVmoCuL7tAcek8IQxmJtozr40k';

        try {
          const addAnimal = await Animal.create(req.body);
          return res.status(201).json(addAnimal);
        } catch (err) {
          console.error(err);
          return res.sendStatus(500);
        }
      }
    }


    const sampleFile = req.files.file;
    const fileName = sampleFile.name.split(' ').join('');
    const fullname = `${new Date().getTime()}_${fileName}`;
    const uploadPath = `${process.env.PWD}/src/uploads/`;

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
  console.log('EDIT ANIMAL id: ', req.params);
  console.log('EDIT ANIMAL body: ', req.body);
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
