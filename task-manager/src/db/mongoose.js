const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
  useNewUrlParser: true,
  useCreateIndex: true,
})





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

// const me = new User({
//   name: 'garry',
//   age: 24,
//   email: 'JAAMES@gmail.com',
//   password: 'passowrd    '
// })
//
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error', error)
// })
