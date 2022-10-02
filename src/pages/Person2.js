import React, { useState } from 'react'
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import {Link} from 'react-router-dom'
import Icons from '../components/Icons'
import Per2Talk from '../components/Per2Talk'
import { IoIosCheckmark } from 'react-icons/io'

const person2 = [
    {
        id:1,
        image: "https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVwoq6_FXZsl1FyhsMWQNwOWdaZ5QMswdLTJzN75j-Kmcw&oe=634AB03B",
        name: "Muhammad Hassan",
        response: "Assalamualaikum Zain bhai",
        time: "Yesterday  9:13 am"
    }
]

function Person2() {
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
      src="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVwoq6_FXZsl1FyhsMWQNwOWdaZ5QMswdLTJzN75j-Kmcw&oe=634AB03B"
            alt=""
            /> 
                <p className="right-4 ml-[-1px] "><IoIosCheckmark/>
						</p>
      </div>
            <p className='nav-title'>Muhammad Hassan</p>

            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
        <div className='navbar-right-ps'>
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
        <p className='left-bar'></p>
        <p className='attend-date'>Yesterday</p>
        <p className='right-bar'></p>
      </div>
     {person2?.map((item) =>
      <Per2Talk  {...item}/>
    )}
     <div className='attend-people-p'>
     <Link to='space'>
        <div className='active-mh'>
          <p className='active-u'>
         <span className='name-active'>You</span>
            <span className='reply'>Walaikumassalam</span>
          </p>
           <p className='time-active'>Today</p>
        </div>
        </Link>
    </div>
       <div>
     {Items.map((itemval) => {

						return  <Link to='space'> <div className='you-h'><li className="active-mb">
                         <p className='you-ab'><p className='active-ub'>
                         <Link to='space'> <span className='name-activeb cursor-pointer'>You</span>   </Link>
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
<Icons/>                        <button
						onClick={ListOfItems}
						className="text-[#616161]">
							<RiSendPlane2Line className="text-center h-6 w-6 m-1 outline-none nev" />
					</button>
     </div>
    </div>
    </div>
    </div>

  )
}

export default Person2