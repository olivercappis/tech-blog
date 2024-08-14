const { Comment } = require('../models')

const commentData = [
    {
        content: 'this is the test content for the comments',
        date_created: '01/01/01',
        user_id: 3,
        post_id: 1
    },
    {
        content: 'this is the test content for the comments',
        date_created: '02/04/02',
        user_id: 2,
        post_id: 1
    },
    {
        content: 'this is the test content for the comments',
        date_created: '03/03/03',
        user_id: 1,
        post_id: 2
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments