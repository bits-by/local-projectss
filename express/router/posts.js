const express = require('express');
const router = express.Router();

let posts = [
    {id:1, title: 'One Post'},
    {id:2, title: 'Two Post'},
    {id:3, title: 'three Post'}
]

//get all request...
router.get('/', (req,res)=> {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0) {
        res.status(200).json(posts.slice(0,limit));
    }
    res.status(200).json(posts);
})

//get single request..
router.get('/:id',(req,res) => {
    const id= parseInt(req.params.id)
    res.json(posts.filter((post) => post.id === id));
})

//create new post
router.post('/', (req,res) => {
    const newPost =  {
        id: posts.length  + 1,
        title: req.body.title,
    }
    if(!newPost.title){
        return res.status(400).json({msg: 'Plz incluse Title'});
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

//update post  
router.put('/:id', (req,res) =>{
const id = parseInt(req.params.id);
const post = posts.find((post) => post.id === id);

if(!post){
    return res.status(404).json({msg: `A post with id of ${id} is not found `})

}
post.title = req.body.title;
res.status(200).json(posts);
})

//delete post
router.delete('/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if(!post){
        return res.status(404).json({msg: `A post with id of ${id} is not found `})
    
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts);
    })

module.exports = router;