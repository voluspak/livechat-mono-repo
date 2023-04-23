import { io } from 'socket.io-client'
import { useState, useEffect } from 'react'
import { getOldMessages, saveMessage } from '../services/messages'
import { getFormData } from '../services/formData'

// ---- Conexion a Socket.io ----
const socket = io('http://localhost:3001/')

export function useMessages () {
  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [storedMessages, setStoredMessages] = useState([])

  useEffect(() => { // <--- getting all messagges from DB
    getOldMessages()
      .then(resp => setStoredMessages(resp.messages))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => { // <--- Broadcasting
    const recivedMesages = message => setMessages([message, ...messages])

    socket.on('message', recivedMesages)

    return () => {
      socket.off('message', recivedMesages)
    }
  }, [messages, message])

  const handleNicknameSubmit = (event) => {
    const nickname = getFormData(event, 'nickname')

    if (nickname === '') return

    setNickname(nickname)
  }

  const handleMessageSubmit = (event) => {
    if (nickname === '' || nickname === undefined) return

    const message = getFormData(event, 'message')

    setMessage(message)

    if (message === '') return

    socket.emit('message', message, nickname)

    const newMessage = {
      body: message,
      from: 'Yo'
    }

    setMessages([
      ...messages,
      {
        ...newMessage,
        id: crypto.randomUUID()
      }
    ])

    // petición POST para guardar el mensaje

    saveMessage({ newMessage, nickname })
      .then(resp => console.log(resp))
  }

  const nicknameIsSetted = nickname !== '' && nickname !== undefined

  return {
    handleMessageSubmit,
    handleNicknameSubmit,
    storedMessages,
    messages,
    nicknameIsSetted,
    nickname
  }
}
