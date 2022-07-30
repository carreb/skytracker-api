const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
// const {auth} = require('./utils/auth')
require('dotenv').config()

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

app.use(express.json())
app.use(cors())

const NPCSellPriceRouter = require('./routes/npcsellprice.js')



app.use('/npc', NPCSellPriceRouter)



app.listen(4545, () => console.log('Server started on port 4545'));