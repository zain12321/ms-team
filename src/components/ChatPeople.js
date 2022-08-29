import React from 'react'

function ChatPeople(props) {
  const {name, image, response, time} = props

  return (
<div className='attend-people'>
        <img className='active-user' 
        src={image}
        alt=""
        />
        <div className='active-p-chat'>
          <p className='active-u'>
            <span className='name-active'>{name}</span>
            <span className='resp'>{response}</span>
          </p>
           <p className='time-active'>{time}</p>
        </div>
    </div>
  )
}

export default ChatPeople