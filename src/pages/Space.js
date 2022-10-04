import React, { useState } from 'react'
import {BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'
import { IoIosCheckmark } from 'react-icons/io'

function Space() {
    const [ inputList, setInputList ] = useState('');
	const [ Items, setItems ] = useState([]);

	const EventChange = (event) => {
		setInputList(event.target.value);
	};

	const ListOfItems = () => {
		setItems((OldItems) => {
			return [ ...OldItems, inputList ];
		});
	};
  return (
    <div className='nav-chat-bar'>
    <div className='navbar-chi'>
      <div className='logo-i'>
            <div className="right-items">
						<div className="name-logos">
							<p className="zname">ZF</p>
						</div>
						<p className="right-2">
							<IoIosCheckmark />
						</p>
					</div>
            <p className='nav-title mt-1'>Zain Fiaz (You)</p>
            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
      
       </div>
    <div className='attend-pic'>
    <div className='spa'>
        <div className='space-m '>
            <img className='space-i flex  items-center '
             src="https://statics.teams.cdn.office.net/evergreen-assets/illustrations/empty_states/empty_self_chat.svg" alt='' />
             <h1 className='font-bold text-[17px] pl-[130px] mt-2'>This is Your Space</h1>
             <p className='text-center text-[15px] mt-2'>This chat is just for you... with you Use it for drafts send file to</p>
             <p className='text-center '>yourself, or get to know chat features a little better</p>
        </div>
      
     {Items.map((itemval) => {
						return <div className='you-h mt-3 mr-11'><li className="active-mb">
                         <p className='you-ab'><p className='active-ub'>
                            <span className='name-activeb'>You</span>
                          <span className='item-ti'>{itemval}</span></p> 
                          <span className='tim'>Today 10:00 PM</span>
                          </p></li>
                          </div>
					})}
     </div>
     <div className='bottom-nav mx-5 b-nav'>
    <div className='b-input'>
     <input  type='name' search="name" 
     className='input-up placeholder:text-[15px]'
     placeholder="Type a new message"
		 onChange={EventChange} required />
     </div>
     <div className='i-f'>
         <Icons/>
    <button onClick={ListOfItems}
						className="text-[#616161]">
						<RiSendPlane2Line className="text-center nev h-6 w-6 m-1 outline-none" 
            />
					</button>
</div> 
</div> 
   
    </div>
    </div>


  )
}

export default Space