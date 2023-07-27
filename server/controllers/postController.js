const { Posts } = require('../models');
console.log(Posts)
const getAllPosts = async (request, response) => {
  try {
    const listOfPosts = await Posts.findAll();
    response.json(listOfPosts);
  } catch (error) {
    response.status(500).json({
      message: 'Fetching failed',
    });
    console.log(error);
  }
};

const createPost = async (request, response) => {
  try {
    const post = request.body;
    const posts = await Posts.create(post);
    response.json(posts);
  } catch (error) {
    response.status(500).json({
      message: 'Creating post failed',
    });
    console.log(error);
  }
};

const findPost = async (request, response) => {
  console.log(request.params);
  try {
    if (request.params?.id) {
      const post = await Posts.findByPk(request.params.id);
      // const post = await Posts.findOne({where:{title:"Sample Title"}})
      // if(post == null)
      // {response.status(404)} else {post instanaceof Project}
      post instanceof Posts;
      response.json(post);
    } else {
      response.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    response.status(500).json({
      message: 'Fetching failed',
    });
    console.log(error);
  }
};

const updatePost = async (request, response) => {
  const { id } = request.params;
  
  try {
    const existingId = await Posts.findByPk(request.params.id);
    if (existingId) {
      const result = await Posts.update(
        {
          title: request.body.title,
          postText: request.body.postText,
          username: request.body.username,
        },
        {
          where: {
            id: request.params.id,
          },
        }
      );
      console.log(result);
      response.json(result);
    } else {
      response.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    response.status(500).json({
      message: 'Updating failed',
    });
    console.log(error);
  }
};
const editPost = async (request, response) => {
  try {
    const { id } = request.params;
    const existingId = Posts.findOne();
    await console.log(id);
  } catch (error) {
    response.status(500).json({
      message: 'Fetching failed',
    });
    console.log(error);
  }
};
const deletePost = async (request, response) => {
  try {
    const { id } = request.params;
    const existingId = await Posts.findByPk(request.params.id);
    if (existingId) {
          const result = await Posts.destroy({
            where: {
              id: request.params.id,
            },
          });
          console.log(result);
          response.json(result);
        } else {
          response.status(404).json({ message: 'Post not found' });
        }
  } catch (error) {
    response.status(500).json({
      message: 'Fetching failed',
    });
    console.log(error);
  }
};
module.exports = { getAllPosts, createPost, updatePost, findPost, editPost,deletePost };
