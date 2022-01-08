const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: 'I am new!'
  },
  adress: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  identification: {
    type: String,
    required: false
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  role: {
    type: Number,
    default: 3
  },
  age: {
    type: Number,
    required: false
  },
  DateOfBirth: {
    type: Date,
    required: false
  },
  MedicalRecord: {
    type: Schema.Types.ObjectId,
    ref: 'MedicalRecord',
  },
  contacts: [
    {
      name: {
        type: String,
        required: false
      },
      phone: {
        type: String,
        required: false
      },
      relationship: {
        type : String, 
        required: false
      }
    }
  ],
  surgerys : [{
    name : {
      type : String,
      required : false
    },
    reason : {
      type : String,
      required : false
    }
  }],
  allergies: [{
    name : {
      type : String ,
      required : false
    }
  }],
  hereditaryDiseases : [ {
    name : {
      type : String,
      required : false
    },
    from : {
      type : String,
      required: false
    }
  }],
  especialidad : {
    type : String,
    required : false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
