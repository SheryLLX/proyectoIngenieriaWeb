

const express = require('express');
const DateController = require('../controllers/DateController')
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.post('/createDate' , isAuth , DateController.createDate )
router.get('/getAllDates' , isAuth , DateController.getDatesById )
router.get('/getAllDatesAdmin' , isAuth , DateController.getAllDates )

module.exports = router;
