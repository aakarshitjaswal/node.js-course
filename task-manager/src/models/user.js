const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },

  age: {
    type: Number,
    default: 0,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if(value.length < 6) {
        throw new Error('Please use a password with length more than 6 digits')
      }

      if(value.includes('password')) {
        throw new Error('Please use a password that is not easy to guess')
      }
    }
  }
})

module.exports = User
