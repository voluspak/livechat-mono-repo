import axios from 'axios'

const urlAPI = '/api'

export async function getOldMessages () {
  try {
    const response = await axios.get(`${urlAPI}/save`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function saveMessage ({ newMessage, nickname }) {
  try {
    const response = await axios.post(`${urlAPI}/save`, {
      newMessage,
      from: nickname
    })
    return response.status
  } catch (error) {
    console.error(error)
  }
}
