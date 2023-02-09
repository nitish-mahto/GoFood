const express = require('express')
const app = express()
const port = 8000
const mongoDB = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/user.routes');

mongoDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(bodyParser.json())
app.use('/',userRoutes)

// app.use('/api', require("./Routes/CreateUser"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})