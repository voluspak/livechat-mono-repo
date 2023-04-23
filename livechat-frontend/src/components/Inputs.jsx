
const Inputs = ({ handleNicknameSubmit, nicknameIsSetted, handleMessageSubmit }) => {
  return (
    <div className='card-body'>

      {/* Nickname */}
      <form className='mb-3' onSubmit={handleNicknameSubmit}>
        <div className='d-flex gap-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Nickname...'
            name='nickname'
            id='nickname'
            disabled={nicknameIsSetted}
          />
          <button className='btn btn-success' type='submit' id='btn-nickname' disabled={nicknameIsSetted}>
            Establecer
          </button>
        </div>
      </form>

      {/* Chat Form */}
      <form onSubmit={handleMessageSubmit}>
        <div className='d-flex gap-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Mensaje...'
            name='message'
            id='nickname'
          />
          <button className='btn btn-success' type='submit' id='btn-message'>
            Enviar
          </button>
        </div>
      </form>
    </div>

  )
}

export default Inputs
