const router = require('express').Router();
const periodController = require('../controllers/period.controller');


router.get('/none/:id', periodController.getNone);
router.get('/day/:id', periodController.getDay);
router.get('/week/:id', periodController.getWeek);
router.get('/month/:id', periodController.getMonth);
router.get('/year/:id', periodController.getYear);
router.get('/all/:id', periodController.getAll);


module.exports = router;
