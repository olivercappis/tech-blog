const seedUsers = require('./user-seeds')
const seedPosts = require('./post-seeds')
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    // await sequelize.query('DROP SEQUENCE IF EXISTS user_account_id_seq CASCADE');

    try {
        await sequelize.sync({ force: true });
    }
    catch (err) { console.log(err) }
    console.log('\n----- DATABASE SYNCED -----\n');

    // await seedUsers();
    // console.log('\n----- USERS SEEDED -----\n');

    // await seedPosts();
    // console.log('\n----- POSTS SEEDED -----\n');

    // await seedComments();
    // console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
}


seedAll()