
const User = require('../models/user')

const UserController = {

    getUserAllUser :  async ( req , res ) => {
        try {
            const users = await User.find({}).populate('MedicalRecord')

            if(!users){
                return res.status(404).send({ message : 'Users not found '})
            }
            res.send(users)
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    //En este punto se debe traer toda la informacion del Cliente contando 
    //Las citas y los controles medicos que tengan -- Pero por los momento 
    //solo traere la informacion normal del cliente ( name , age ....)
    getUserById : async ( req , res ) => {
        try {
            
            const user = await User.findById({ _id : req.userId })

            if(!user){
                return res.status(404).send({ message : 'Users not found '})
            }       
            res.status(200).send(user)
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    deleteUser :  async ( req , res ) => {
        try {
            const user = await User.findByIdAndDelete( req.params )

            if(!user){
                return res.status(404).send({ message : 'Users not found to delete '})
            }
            res.send({})
        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createContact: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.userId })
            user.contacts = await user.contacts.concat({
                ...req.body
            })
            await user.save()

            res.send({})

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createSurgery: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.userId })

            user.surgerys = user.surgerys.concat({
                ...req.body
            })

            console.log(user)

            await user.save()

            res.send({})

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createAllergy: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.userId })

            user.allergies = user.allergies.concat({
                ...req.body
            })

            console.log(user)

            await user.save()

            res.send({})

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    createHereditaryDisease: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.userId })

            user.hereditaryDiseases = user.hereditaryDiseases.concat({
                ...req.body
            })

            console.log(user)

            await user.save()

            res.send({})

        } catch (e) {
            res.status(500).send({ error: e })
        }
    },
    getAllDoctor : async ( req , res ) => {
        try {
            
            const users = await User.find({ role : 2 })
            console.log(users)
            
            if(!users ){
                return res.status({ message : 'Doctors not found '})
            }
            res.send( users)
        } catch (e) {
            res.status(500).send( { error : e })
        }
    }
}


module.exports = UserController;