import React, { useState } from 'react'
import AttendPeople from '../components/AttendPeople'
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'
import {Link} from 'react-router-dom'

const active = [
  {
            id:1,
            image: "https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4",
            name: "Muhammad Mohsin",
            response: "Hello Zain whatsup bro",
            time: "Today 12:45 pm"
        }

  
]
function Person3() {
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
    <div className=''>
        <div className='flex pr-14'>
<div className='flex items-center navbar-chia  z-50  '>
      <div className='logo-i '>
            <img className='nav-logo' 
            src="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
            alt=""
            />
            <p className='nav-title-h px-1 font-bold'>Muhammad Mohsin</p>
            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
        <div className='navbar-attendants-right mr-[450px]'>
          <div className='camera'>
          <BsCameraVideo className='bs'/>
          <p className='bsl'><BsTelephone className='bs rotate-3'/></p>
            </div >
           <div className='nav-right'>
           <BsPeople className='bsp'/>
<p className='plu '><AiOutlinePlus className='pli'/></p>
           </div>
      
    </div>
      
</div>
       </div> 



       <div className='home-ct h-s'>
  <div className='attend-p '>
    
      <div className='date-bar '>
        <p className='left-bar'></p>
        <p className='attend-date'>Yesterday</p>
        <p className='right-bar'></p>
      </div>
   <div className='atp'>
    {active?.map((item) =>
      <AttendPeople  {...item}/>
    )}
   </div>
     <div className='attend-people-p mr-11'>
       <Link to="space">
        <div className='active-m '>
          <p className='active-u'>
            <span className='name-active'>You</span>
            <span className='rep'>I'm fine bro how are you</span>
          </p>
           <p className='time-active'>Yesterday</p>
        </div>
        </Link>
    </div>
    
       <div>
      
     {Items.map((itemval) => {

			return <Link to='space'>
        <div className='you-in mt-3 mr-11'>
        <li className="active-mb">
                <p className='you-a'><p className='active-ub'>
                   <span className='name-activeb'>You</span>
                    <span className='item-ti'>{itemval}</span>
                    </p>
                     <span className='tim'>Today 10:00 PM</span>

                    </p>
                    </li>
                  </div>
                  </Link> 
					})}
     </div> 
    
    <div className='bottom-nav mx-5'>
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
   </div>

  )
}

export default Person3