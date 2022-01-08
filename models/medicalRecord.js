var mongoose = require('mongoose')
var Schema = mongoose.Schema


var MedicalRecordSchema = new Schema({

    bloodType: {
        type: String,
        required: true
    },
    ethnicOrigin: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    MedicalControls: [{
        reason: {
            type : String,
            ref: 'Reason',
            required: true
        },
        diagnosis: {
            type: String,
            required: true
        },
        result: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema)
