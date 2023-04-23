import './App.css'
import Inputs from './components/Inputs'
import MessagesDisplay from './components/MessagesDisplay'
import { useMessages } from './hooks/useMessages'

function App () {
  const {
    handleMessageSubmit, handleNicknameSubmit, nicknameIsSetted,
    storedMessages, messages, nickname
  } = useMessages()
  return (
    <>
      <main className='container mt-3'>
        <div className='card'>
          <div className='mt-3 mb-3 card' id='content-chat'>
            <MessagesDisplay
              nickname={nickname}
              storedMessages={storedMessages}
              messages={messages}
            />
            <Inputs
              handleMessageSubmit={handleMessageSubmit}
              handleNicknameSubmit={handleNicknameSubmit}
              nicknameIsSetted={nicknameIsSetted}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
