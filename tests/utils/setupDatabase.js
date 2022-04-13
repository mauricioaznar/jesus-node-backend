const User = require('../../models/nosql/users')

const userOne = {
  name: 'MIke',
  email: 'mike@gmail.com',
  password: 'jh2883283',
  age: 2,
}

async function setupDatabase () {
  await User.deleteMany({})
  await new User({
      ...userOne,
      password: "$2a$10$ralCvMPCFpSa4wDZEHosHukm9HCqKoRwg/HytLYBQK2p4PN8oxxZ2"
  }).save()
}


module.exports = {
  setupDatabase,
  userOne
}