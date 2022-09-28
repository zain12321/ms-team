import React, { useState } from 'react'
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'
import Per1Talk from '../components/Per1Talk'
import {Link} from 'react-router-dom'
import { IoIosCheckmark } from 'react-icons/io'

const person = [
    {
        id:1,
        image: "https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwqSfRbOwbPOZ11IlusU4ThKymsy95wGgqCHdKlUYA5VA&oe=6342011F",
        name: "Hassan Mujtaba",
        response: "How are You Zain",
        time: "Today  10:20 am"
    }
]
function Person1() {
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
            <div className='flex'>
            <img className='nav-logo' 
            src="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwqSfRbOwbPOZ11IlusU4ThKymsy95wGgqCHdKlUYA5VA&oe=6342011F"
            alt=""
            />
            <p className="right-4 ml-[-1px] "><IoIosCheckmark />
						</p>
            </div>
            <p className='nav-title'>Hassan Mujtaba</p>

            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
        <div className='navbar-right-p'>
          <div className='camera'>
          <BsCameraVideo className='bs'/>
          <p className='bsl'><BsTelephone className='bs rotate-3'/></p>  
            </div >
           <div className='nav-right'>
           <BsPeople className='bsp'/>
            <p className='plu'><AiOutlinePlus className='pli'/></p>
           </div>
    </div>
       </div>
    <div className='attend-pic'>
       <div className='date-bar'>
        <p className='left-bar-l'></p>
        <p className='attend-date-l'>Last Read</p>
        <p className='right-bar-l'></p>
      </div>
     {person?.map((item) =>
      <Per1Talk  {...item}/>
    )}
     <div className='attend-people-p'>
    </div>
       <div>
     {Items.map((itemval) => {
						return  <Link to='space'><div className='you-h'><li className="active-mb">
                         <p className='you-ab'><p className='active-ub'>
                          <span className='name-activeb'>You</span>
                          <span className='item-ti'>{itemval}</span></p> 
                          <span className='tim'>Today 10:00 PM</span>
                          </p></li>
                          </div>
                          </Link>
					})}
     </div>
    <div className='bottom-nav'>
        <div className='b-input'>
     <input  type='name' search="name" className='input-up placeholder:text-[15px]'
      placeholder="Type a new message"
		onChange={EventChange} required />
        </div>
<div className='i-f'>
<Icons/>      
                 <button
						onClick={ListOfItems}
						className="
							  text-[#616161]"
					>
						<RiSendPlane2Line className="text-center h-6 w-6 m-1 outline-none nev" />
					</button>
             </div>
             </div>
                 </div>
                  </div>

  )
}

export default Person1