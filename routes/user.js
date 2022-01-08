

const express = require('express');
const UserController = require('../controllers/UserController')
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/getAllUsers' , isAuth , UserController.getUserAllUser )
router.get('/getUserInformation' , isAuth , UserController.getUserById )


router.post('/createContact' , isAuth , UserController.createContact)
router.post('/createSurgery' , isAuth , UserController.createSurgery)
router.post('/createAllergy' , isAuth , UserController.createAllergy)
router.post('/createHereditaryDisease' , isAuth , UserController.createHereditaryDisease)
router.get('/getAllDoctor' , isAuth , UserController.getAllDoctor )

module.exports = router;
