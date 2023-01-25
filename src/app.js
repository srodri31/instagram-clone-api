const express = require('express')
const bodyParser = require('body-parser')

const { connection } = require('./db/db')
const postsRouter = require('./routes/posts')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/posts', postsRouter)

// TODO port should be env
app.listen(3000, () => {
  console.log("App listening on port 3000")
  connection.authenticate()
    .then(() => {
      console.log("Connection db succeed")
      // return User.findAll()
    })
    // .then((users) => console.log("Get all users", users))
    .catch(() => console.log("Connection db failed"))
})