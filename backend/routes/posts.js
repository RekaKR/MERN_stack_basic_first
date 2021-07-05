const express = require('express')
const router = express.Router()
const Post = require('../models/postsModel')


//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})


//GET BACK A SPECIFIC POST BY URL
router.get('/:postId', async (req, red) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json(err)
  }
})

//DELETE A SPECIFIC POST BY URL
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postid })
    res.json(removedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

//UPDATE A SPECIFIC POST BY URL
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})


//SUBMIT A POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

/*
router.post('/', (req, res) => {
  //console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  post.save()
    .then(data => res.json(data))
    .catch(err => res.json({ message: err }))
})
*/

//Can have multiple here
router.get('/specific', (req, res) => {
  res.send('specific posts')
})

module.exports = router