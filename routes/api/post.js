var express = require('express');
var router = express.Router();
const PostRepository = require('../../repositories/PostRepository');

console.log(PostRepository);
/* GET home posts. */

router.get('/', async (req, res, next) => {
  const posts = await PostRepository.getPosts();
  console.log(posts);
  res.send(posts);
});

module.exports = router;
