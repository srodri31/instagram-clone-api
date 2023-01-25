const { Router } = require("express")
const { Post } = require("../db/db")

const router = Router()

// move logic to controller
router.get('/', async(req, res) => {
    try {
        const posts = await Post.findAll()
        res.status(200).send({
            posts
        })
    } catch(e) {
        res.status(500).send({
            error: e.message
        })
    } 
})

router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        res.status(200).send({
            post
        })
    } catch(e) {
        res.status(400).send({
            error: e.message
        })
    }
   
})

module.exports = router