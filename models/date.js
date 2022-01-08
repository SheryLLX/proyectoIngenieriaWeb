const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateSchema = new Schema(
  {
    reason: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    doctor : {
      type : String,
      required : true
    },
    ready: {
      type: Boolean,
      required : false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model( 'Date', dateSchema );
