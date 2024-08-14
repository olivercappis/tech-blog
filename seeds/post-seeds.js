const { Post } = require('../models')

const postData = [
    {
        title: 'First test post',
        content: 'this is the first test post in the database. hope it shows up properly',
        date_created: '01/01/01',
        user_id: 1
    },
    {
        title: 'second test post',
        content: 'this is the second test post in the database. hope it shows up properly',
        date_created: '02/02/02',
        user_id: 1
    },
    {
        title: 'third test post',
        content: 'this is the third test post in the database. hope it shows up properly',
        date_created: '03/03/03',
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts