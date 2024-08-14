const { User } = require('../models')


const userData = [
    {
        username: 'olivercappis',
        password: 'pass1234'
    },
    {
        username: 'ellaconnor',
        password: 'pass2345'
    },
    {
        username: 'shephelton',
        password: 'pass3456'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers