const { User, Post, Follow, Like, Replies} = require('./models');
const db = require('./models/index.js');

async function testCases() {
    // 1. Create a new user
    const user = await User.create({
        username: 'testuser',
        email: 'abc@gmail.com',
        display_name: 'test user',
        bio: 'test bio'
    });

    const user2 = await User.create({
        username: 'testuser1',
        email: 'abc1@gmail.com',
        display_name: 'test user2',
        bio: 'test bio2'
    });

    // 2. Create a new post
    const post = await Post.create({
        user_id: user.id,
        content: 'test post content',
        posted_at: '2021-03-01 00:00:00'
    });

    // 3. Create a new follow
    const follow = await Follow.create({
        follower_id: user.id,
        following_id: user2.id,
        combined_id: user.id + " + " + user2.id
    });

    // 4. Create a new like
    const like = await Like.create({
        user_id: user2.id,
        post_id: post.id,
        combined_id: user2.id + " + " + post.id
    });

    // 5. Create a new reply
    const reply = await Replies.create({
        user_id: user2.id,
        post_id: post.id,
        reply_content: 'test reply content',
        replied_at: '2021-03-01 00:00:00'
    });
    db.sequelize.close();
}

testCases();
