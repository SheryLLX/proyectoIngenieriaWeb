
const Date = require('../Models/date')

const DateController = {

    createDate: async (req, res) => {
        try {
            console.log('Hereee date')
            console.log(req.userId)
            const date = await new Date({
                ...req.body,
                creator: req.userId,
            })

            console.log(date)

            await date.save();

            res.status(201).send({ date })
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    getDatesById: async (req, res) => {
        try {
            console.log('Get all dates from user')
            let dates = ''

            if (req.query.id) {
                dates = await Date.findOne({ _id: req.query.id })
            } else {
                dates = await Date.find({ creator : req.userId })
            }

            if (!dates) {
                return res.status(404).send({ message: 'Date not found' })
            }
            res.send(dates)
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    getAllDates : async ( req , res ) => {
        try {
            const dates = await Date.find({}).populate('creator')
            if(!dates){
                return res.status(404).send({ message : 'Dates not found'})
            }
            res.send(dates)
        } catch (e) {
            res.status(500).send({ error : e })
        }
    }
}

module.exports = DateController;