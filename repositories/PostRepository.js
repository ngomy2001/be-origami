const Post = require('../database/models/PostModel');
console.log('🚀 ~ file: PostRepository.js ~ line 2 ~ Post', Post);
const getPosts = async () => {
  try {
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    console.log(
      '🚀 ~ file: PostRepository.js ~ line 5 ~ getPosts ~ error',
      error
    );
  }
};
const getPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(
      '🚀 ~ file: PostRepository.js ~ line 18 ~ getPost ~ error',
      error
    );
  }
};
module.exports = {
  getPosts,
  getPostById,
};
