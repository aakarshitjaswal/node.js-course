// CRUD CREATE READ UPDATE DELETE

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  db.collection('tasks').deleteOne({
    description: "Do Laundry"
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  // db.collection('users').updateOne({
  //   _id: new ObjectID('5f59e48f04cf6619d8fd0111')
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').findOne({_id: new ObjectID('5f592ccdfda543188025b387')}, (error, result) => {
  //   console.log(result)
  // })
  //
  // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // db.collection('users').findOne({name: "Aakarshit"}, (error, result) => {
  //   if(error) {
  //     return console.log('Unable to fetch')
  //   }
  //
  //   console.log(result)
  // })
  //
  // db.collection('users').find({age: 27}).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').insertOne({
  //   name: 'Andrew',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to inset a user')
  //   }
  //
  //   console.log(result.ops)
  //
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28,
  //   },{
  //     name: 'Alex',
  //     age: 39,
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert document')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Do Laundry',
  //     completed: false,
  //   },{
  //     description: 'Walk the dog',
  //     completed: true,
  //   },{
  //     description: 'Eat food',
  //     completed: false,
  //   }
  // ],(error, result) => {
  //   if (error) {
  //     return console.log('could not creat collection')
  //   }
  //
  //   console.log(result.ops)
  //
  // })
} )
