const User = require('../../models/nosql/users')

const userOne = {
  name: 'MIke',
  email: 'mike@gmail.com',
  password: 'jh2883283',
  age: 2,
  role: ["admin", "user"]
}

const newTrack = { 
  name: "new track name",
  album :"new album name",
  cover :"new cover link",
  artist :{
      name :"artist name",
      nickname :"artist nickname",
      nationality :"new nationality"
  },
  duration :{
      start :1,
      end :0
  },
  mediaId :"624df0ea4ec7851c1a150700"
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
  userOne, 
  newTrack
}