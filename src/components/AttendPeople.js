import React, { useState } from 'react'

function AttendPeople(props) {
    const {name, image, response, time} = props
  return (
    <div className='attend-people'>
        <img className='active-user' 
        src={image}
        alt=""
        />
        <div className='active-p'>
          <p className='active-u'>
            <span className='name-active'>{name}</span>
            <span className='res'>{response}</span>
          </p>
           <p className='time-active'>{time}</p>
        </div>
    </div>
  )
}

export default AttendPeople