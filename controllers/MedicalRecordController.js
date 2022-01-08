
const MedicalRecord = require('../Models/MedicalRecord')

const MedicalRecordController = {

    createMedicalRecord: async (req, res) => {
        try {
            const mr = await new MedicalRecord(req.body)

            await mr.save();

            res.status(201).send({})
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    getMedicalRecordById: async (req, res) => {
        try {

            const md = ''

            if(req.query.id){
                mr = await MedicalRecord.findOne({ _id : req.query.id })
            }else{
                mr = await MedicalRecord.findOne({ user: req.userId })
            }

            if (!mr) {
                return res.status(404).send({ message: 'Medical Record not found' })
            }
            res.send(mr)
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    getAllMedicalRecord: async (req, res) => {
        try {
            const md = await MedicalRecord.find({}).populate('user')

            if (!md) {
                return res.status(404).send({ message: 'Medical records not found' })
            }
            res.send(md)
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createMedicalControl: async (req, res) => {
        try {

            console.log( req.body )
            const md = await MedicalRecord.findOne({ _id: req.body.id })

            md.MedicalControls = md.MedicalControls.concat({
                reason: req.body.reason,
                diagnosis: req.body.diagnosis,
                result: req.body.result
            })

            console.log(md)

            await md.save()

            res.send({ md : md.MedicalControls })

        } catch (e) {
            res.status(500).send({ error: e })
        }
    }
    /*
    createContact: async (req, res) => {
        try {

            const { nameContact, relationship, phone } = req.body
            const { id, report } = req.query

            await MedicalRecord.saveContact(id, nameContact, relationship, phone, report);

            res.redirect('/medicalRecord/viewMedicalReport?id=' + id + "&report=" + report);

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createSurgery: async (req, res) => {
        try {
            const { nameSurgery, descripcionSurgery } = req.body
            const { id, report } = req.query

            await MedicalRecord.saveSurgery(id, nameSurgery, descripcionSurgery, report);

            res.redirect('/medicalRecord/viewMedicalReport?id=' + id + "&report=" + report);

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createHD: async (req, res) => {
        try {
            console.log('hereee')
            const { nameHD, descripcionHD } = req.body
            const { id, report } = req.query

            await MedicalRecord.saveHereditaryDiseases(id, nameHD, descripcionHD, report);
            console.log('dddd')
            res.redirect('/medicalRecord/viewMedicalReport?id=' + id + "&report=" + report);
        } catch (e) {
            res.status(500).send({ error: e })
        }
    }
    */
}

module.exports = MedicalRecordController;