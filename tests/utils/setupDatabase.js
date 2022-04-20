const User = require('../../models/nosql/users')
const {encrypt} = require("../../utils/handlePassword");

const adminUser = {
    name: 'MIke',
    email: 'admin@gmail.com',
    password: 'jh2883283',
    age: 2,
    role: ["admin", "user"]
}

const employeeUser = {
    name: 'MIke',
    email: 'employeeuser74012390@gmail.com',
    password: 'jh2883283',
    age: 2,
    role: ['employee']
}

const newTrack = {
    name: "new track name",
    album: "new album name",
    cover: "new cover link",
    artist: {
        name: "artist name",
        nickname: "artist nickname",
        nationality: "new nationality"
    },
    duration: {
        start: 1,
        end: 0
    },
    mediaId: "624df0ea4ec7851c1a150700"
}

async function setupDatabase() {
    await User.deleteMany({})
    await new User({
        ...adminUser,
        password: (await encrypt(adminUser.password))
    }).save()
    await new User({
        ...employeeUser,
        password: (await encrypt(employeeUser.password))
    }).save()
}


module.exports = {
    setupDatabase,
    userOne: adminUser,
    employeeUser,
    newTrack
}