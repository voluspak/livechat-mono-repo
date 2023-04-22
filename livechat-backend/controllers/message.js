const Message = require('../models/Message')

const controller = {
  // ---- Guarda el mensaje 👇 ----
  save: async (req, res) => {
    const params = req.body
    const message = new Message()

    message.message = params.message
    message.from = params.from

    try {
      await message.save()
      return res.json(message)
    } catch {
      return res.status(400).end()
    }
  },

  // ---- Obtener todos los mensajes 👇 ----
  allMessages: async (req, res) => {
    const messages = await Message.find().sort({ _id: 1 })

    return res.status(200).send({
      messages
    })
  }
}

module.exports = controller
