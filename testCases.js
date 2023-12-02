const { User, Post, Follow, Like, Replies} = require('./models');

async function testCases() {
    // 1. Create a new user
    const user = await User.create({
        username: 'testuser',
        email: 'abc@gmail.com',
        display_name: 'test user',
        bio: 'test bio'
    });

    const user2 = await User.create({
        username: 'testuser2',
        email: 'abc2@gmail.com',
        display_name: 'test user2',
        bio: 'test bio2'
    });

    // 2. Create a new post
    const post = await Post.create({
        user_id: user.id,
        content: 'test post content',
        posted_at: new Date()
    });

    // 3. Create a new follow
    const follow = await Follow.create({
        user_id: user.id,
        follower_id: user2.id
    });

    // 4. Create a new like
    const like = await Like.create({
        user_id: user2.id,
        post_id: post.id
    });

    // 5. Create a new reply
    const reply = await Replies.create({
        user_id: user.id,
        post_id: post.id,
        reply_content: 'test reply content',
        replied_at: new Date()
    });
}

testCases();
