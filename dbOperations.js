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

async function getRepliesByUser(user_id) {
    const replies = await Replies.findAll({
        where: {
            user_id: user_id
        }
    });
    return replies;
}

async function getLikesByUser(user_id) {
    const likes = await Like.findAll({
        where: {
            user_id: user_id
        }
    });
    return likes;
}

async function getFollowsByUser(user_id) {
    const follows = await Follow.findAll({
        where: {
            following_id: user_id
        }
    });
    return follows;
}

async function getUserFollowers(user_id) {
    const followers = await Follow.findAll({
        where: {
            follower_id: user_id
        }
    });
    return followers;
}

async function getPostsByUser(user_id) {
    const posts = await Post.findAll({
        where: {
            user_id: user_id
        }
    });
    return posts;
}

async function deleteUser(user_id){
    const replies = getRepliesByUser(user_id);
    const likes = getLikesByUser(user_id);
    const follows = getFollowsByUser(user_id);
    const followers = getUserFollowers(user_id);
    const posts = getPostsByUser(user_id);
    await replies.destroy();
    await likes.destroy();
    await follows.destroy();
    await followers.destroy();
    await posts.destroy();
    await User.destroy({
        where: {
            user_id: user_id
        }
    });
}

async function getRepliesByPost(post_id) {
    const replies = await Replies.findAll({
        where: {
            post_id: post_id
        }
    });
    return replies;
}

async function getLikesByPost(post_id) {
    const likes = await Like.findAll({
        where: {
            post_id: post_id
        }
    });
    return likes;
}

async function deletePost(post_id){
    const replies = getRepliesByPost(post_id);
    const likes = getLikesByPost(post_id);
    await replies.destroy();
    await likes.destroy();
    await Post.destroy({
        where: {
            post_id: post_id
        }
    });
}