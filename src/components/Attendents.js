import React from 'react'
import {Link} from 'react-router-dom'
function Attendents() {
  return (

    <Link to="/">
    <div className='chat-box'>
       <div className='chat-img'>
       <div className='user-img'>
            <img className='user-image' src="https://pps.whatsapp.net/v/t61.24694-24/237469084_472594491265339_8092715740756466713_n.jpg?ccb=11-4&oh=01_AVz9Bn2gDlHqkxxhZha5KRdbOwJn1-GdFy93jUFVqMrx0w&oe=63192349"
            alt="sssssssss"
            />
           
        </div>
        <div className='user-name'>
   
            <p className='attend'>Attendents</p>
            <p className='desc-user'>You in</p>
        </div>
       </div>
        <div className='time'>
             10:12
        </div>
    </div>

</Link>

  )
}

export default Attendents