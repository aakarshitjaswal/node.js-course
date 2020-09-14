const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
  useNewUrlParser: true,
  useCreateIndex: true,
})

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
    type: Number
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

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const task = new Task({
//   description: 'Complete Node.js course',
//   completed: true,
// })
//
// task.save().then(() => {
//   console.log(task)
// }).catch((error) => {
//   console.log('Error Occured')
// })

const me = new User({
  name: 'garry',
  age: 24,
  email: 'JAAMES@gmail.com',
  password: 'passowrd    '
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error', error)
})
