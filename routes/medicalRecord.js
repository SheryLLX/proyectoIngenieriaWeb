const express = require('express')
const router = express.Router()

const isAuth = require('../middleware/is-auth');

//call to folder Controller
const MedicalRecordController = require('../Controllers/MedicalRecordController')

 
// call all methods post
router.post('/createMedicalReport' , MedicalRecordController.createMedicalRecord )
router.post('/createMedicalControl' , MedicalRecordController.createMedicalControl )

//call all methods get
router.get('/medicalRecordUserById' , isAuth , MedicalRecordController.getMedicalRecordById )
router.get('/getAllMedicalRecord' , isAuth , MedicalRecordController.getAllMedicalRecord )

//export all methods in the document
module.exports = router ;