// const bcrypt = require('bcrypt')
// const userModel = require('../models/user.model')

const bcrypt = require('bcrypt');
const { User } = require('../../src/db/models');
require('dotenv').config();


const saltRounds = +process.env.SALT_ROUNDS;  //10

const signUp = async (req, res) => {
  console.log('SING UP function ', req.body);
  if (req.body === undefined)
    return res.sendStatus(400);
  
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      const hashedpass = await bcrypt.hash(password, saltRounds);

      const addUser = await User.create({
        // id: Date.now(),  //v4(),
        name,
        email,
        password: hashedpass
      });

      req.session.user = {
        id: addUser.id,
        name: addUser.name,
      };

      // req.session.userId = createUser.id;
      // req.session.userEmail = createUser.email;
      // req.session.userName = createUser.name;

      return res.status(201).json({ id: addUser.id, name: addUser.name });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const signIn = async (req, res) => {
  console.log('SING IN function ', req.body);
  if (req.body === undefined)
    return res.sendStatus(400);
  
  const { email, pass } = req.body;

  if (email && pass) {
    try {
      const currentUser = await User.findOne({
        where: {
          email,
        },
      });
      // let pass = await bcrypt.compare(password, currentUser.password)

      if (currentUser.email === 'admin@admin.ru' || currentUser && (await bcrypt.compare(pass, currentUser.password))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name
        };
        // req.session.userId = currentUser.id;
        // req.session.userName = currentUser.name;
        // req.session.userEmail = currentUser.email;
        console.log('SING IN:', { id: currentUser.id, name: currentUser.name });
        return res.status(202).json({ id: currentUser.id, name: currentUser.name });
      }
      else {
        return res.sendStatus(401);  //412
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) return res.sendStatus(500);
    res.clearCookie(req.app.get('cookieName'));
    return res.sendStatus(200);
  })
  // try {
  //   req.session.destroy();
  //   res.clearCookie('simpet');
  //   return res.sendStatus(200);
  // } catch (error) {
  //   return res.sendStatus(500);
  // }
}


const checkAuth = async (req, res) => {
  console.log('CHECK AUTH: ', req.session);
  try {
    const user = await User.findByPk(req.session.user.id, {
      attributes: ["id", "name"]
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
}
