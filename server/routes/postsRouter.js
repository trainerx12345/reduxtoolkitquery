const express = require('express');
const {
  getAllPosts,
  createPost,
  updatePost,
  findPost,
  editPost,
  deletePost
} = require('../controllers/postController.js');
const router = express.Router();

//getAllPosts
router.get('/getallposts', getAllPosts);
router.get('/getPost/:id', findPost);

//create A Posts
router.post('/createPost', createPost);
router.put('/:id', updatePost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;
