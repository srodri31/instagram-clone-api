const express = require('express')
const bodyParser = require('body-parser')

const { connection } = require('./db/db')
const postsRouter = require('./routes/posts')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/posts', postsRouter)

app.listen(PORT, () => {
  console.log("App listening on port "+PORT)
  connection.authenticate()
    .then(() => {
      console.log("Connection db succeed")
    })
    .catch(() => console.log("Connection db failed"))
})