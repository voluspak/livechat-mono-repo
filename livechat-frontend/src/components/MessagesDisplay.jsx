import '../App.css'



export const MessagesDisplay = ({ messages, storedMessages, nickname }) => {
  const scrollbarContainer = useScrollbarPosition(storedMessages)


  return (
    <div className='card-body inputAndMessagesContainer' ref={scrollbarContainer}>

      {/* MENSAJES ALMACENADOS */}
      <small className='text-center text-muted'>Mensajes guardados</small>

      {storedMessages.map((message) => (
        <div key={message._id} className={`border border-danger d-flex p-3 ${message.from === nickname ? 'justify-content-end' : 'justify-content-start'}`}>
          <div className={`${message.from === nickname ? 'bg-success bg-opacity-25' : 'bg-light'}`}>
            <div className='card-body'>
              <small className='text-muted'>{message.from}: {message.message}</small>
            </div>
          </div>
        </div>
      ))}

      {/* MENSAJES RECIENTES */}
      {messages.map((message) => {
        return (
          <div key={message.id} className={`d-flex p-3 h-25  ${message.from === 'Yo' ? 'justify-content-end' : 'justify-content-start'}`}>
            <div className={`${message.from === 'Yo' ? 'bg-success bg-opacity-25' : 'bg-light'}`}>
              <div className='card-body'>
                <small>{message.from}: {message.body}</small>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessagesDisplay
