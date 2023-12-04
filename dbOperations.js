const { User, Post, Follow, Like, Replies} = require('./models');

async function createUser(username, email, display_name, bio) {
    const user = await User.create({
        username: username,
        email: email,
        display_name: display_name,
        bio: bio
    });
    return user;
}

async function createPost(user_id, content, posted_at) {
    const post = await Post.create({
        user_id: user_id,
        content: content,
        posted_at: posted_at
    });
    return post;
}

async function createFollow(follower_id, following_id, combined_id) {
    const follow = await Follow.create({
        follower_id: follower_id,
        following_id: following_id,
        combined_id: combined_id
    });
    return follow;
}

async function createLike(user_id, post_id, combined_id) {
    const like = await Like.create({
        user_id: user_id,
        post_id: post_id,
        combined_id: combined_id
    });
    return like;
}

async function createReply(user_id, post_id, reply_content, replied_at) {
    const reply = await Replies.create({
        user_id: user_id,
        post_id: post_id,
        reply_content: reply_content,
        replied_at: replied_at
    });
    return reply;
}

