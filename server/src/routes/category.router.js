const router = require('express').Router();
const categoryController = require('../controllers/category.controller');


router.get('/feed/:id', categoryController.getFeed);
router.get('/hygiene/:id', categoryController.getHygiene);
router.get('/medical/:id', categoryController.getMedical);
router.get('/contact/:id', categoryController.getContact);
router.get('/care/:id', categoryController.getCare);
router.get('/party/:id', categoryController.getParty);


module.exports = router;
