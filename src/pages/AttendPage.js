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
        image: "https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVwoq6_FXZsl1FyhsMWQNwOWdaZ5QMswdLTJzN75j-Kmcw&oe=634AB03B",
        name: "Muhammad Hassan",
        response: "1 in",
        time: "Yesterday  10:20 am"
    },
    {
        id:2,
        image: "https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwqSfRbOwbPOZ11IlusU4ThKymsy95wGgqCHdKlUYA5VA&oe=6342011F",
        name: "Hassan Mujtaba",
        response: "1 in",
        time: "Yesterday 01:39 am"
    },
    {
        id:3,
        image: "https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVxjJhp8YUxxUxoSaC4HxdlWe_2E6zY1eGxUMOSR0eSgnw&oe=634BD6A1",
        name: "Zubair Butt",
        response: "1 Out",
        time: "Yesterday 09:20 pm"
    },
    {
        id:4,
        image: "https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM",
        name: "Shaista Kalsoom",
        response: "1 Checkin",
        time: "26/4"
    },
    {
        id:5,
        image: "https://media-exp1.licdn.com/dms/image/C4D03AQGibHlpYCxNJg/profile-displayphoto-shrink_100_100/0/1653766940995?e=1670457600&v=beta&t=fcOLOfJhZpJgvz3QwJ-Z6mpQGm16zFSpvZHPE9QL1mI",
        name: "Muhammad Ali",
        response: "1 break",
        time: "Yesterday 4:33 pm"
    },
    {
      id:6,
      image: "https://media-exp1.licdn.com/dms/image/C5603AQERH2ST81M1HA/profile-displayphoto-shrink_100_100/0/1596567217523?e=1666828800&v=beta&t=srEpS3_qIgVbPhg-eRT8c9QCCov4vL1whnqLidY86i0",
      name: "Muhammad Haris",
      response: "1 in",
      time: "Today 11:34 pm"
  },
    {
        id:7,
        image: "https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4",
        name: "Muhammad Mohsin",
        response: "0 Out",
        time: "Yesterday 9:44 pm"
    },
  
]
function AttendPage() {
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
<div className='flex items-center navbar-chia  z-50 '>
      <div className='logo-i '>
            <img className='nav-logo' 
            src="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
            alt=""
            />
            <p className='nav-title'>Attendants</p>
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
<p className='num '>17</p>
           </div>
      
    </div>
      
</div>
       </div> 



       <div className='home-ct '>
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
        <div className='active-m mt-3 mr-11'>
          <p className='active-u'>
            <span className='name-active'>You</span>
            <span>1 in</span>
          </p>
           <p className='time-active'>Yesterday</p>
        </div>
        </Link>
    </div>
    <div className='atp'>
    {active?.map((item) =>
      <AttendPeople  {...item}/>
    )}
    </div>
       <div>
       <div className='date-bar'>
        <p className='left-bar'></p>
        <p className='attend-date'>Today</p>
        <p className='right-bar'></p>
      </div>
       
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

export default AttendPage