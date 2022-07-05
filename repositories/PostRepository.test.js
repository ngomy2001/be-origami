const PostRepository = require('./PostRepository');
const database = require('../database/connect');

beforeAll(() => {
  database.connect();
});

afterAll(async () => {
  await database.disconnect();
});
test('Get all posts', async () => {
  const posts = await PostRepository.getPosts();
  console.log(
    '🚀 ~ file: PostRepository.test.js ~ line 13 ~ test ~ posts',
    posts
  );

  expect(posts).toBeTruthy();
  expect(posts.length).toBeGreaterThan(0);
});

const mockPost = {
  id: 'asfjk',
  author: 'nampt',
};
test('Get a post by Id', async () => {
  const post = await PostRepository.getPostById(mockPost.id); //update lai Id

  expect(post).toBeTruthy();
  expect(post.author).toBe(mockPost.author);
});
