const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { Server } = require('socket.io')
const http = require('http')
const messageRouter = require('./routes/message')
require('dotenv').config({ path: './.env' })

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
})

app.use(express.static('../livechat-frontend/dist'))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', messageRouter)

if (!process.env.PORT) {
  console.error('La variable PORT no está definida!')
  process.exit(1)
}

if (!process.env.MONGO_URI) {
  console.error('La variable MONGO_URI no está definida!')
  process.exit(1)
}

const PORT = process.env.PORT
const URL = process.env.MONGO_URI

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB conecction succeed! ✨')
    server.listen(PORT, () => console.log(`Server running in Port: ${PORT} 🚀`))
  })
  .catch((error) => console.error(error))

io.on('connection', (socket) => {
  console.log(`Cliente ${socket.id} conectado con éxito`)
  socket.on('message', (message, nickname) => {
    socket.broadcast.emit('message', {
      body: message,
      from: nickname
    })
  })
})

app.get('/', (req, res) => {
  res.status(200).send('<h1>ChatLive</h1>')
})
