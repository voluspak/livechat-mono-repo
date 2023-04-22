const messageRouter = require('express').Router()
const controller = require('../controllers/message')

messageRouter.post('/save', controller.save)
messageRouter.get('/save', controller.allMessages)

module.exports = messageRouter
