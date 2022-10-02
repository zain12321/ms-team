import React, { useState } from 'react'
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'
import ChatPeople from '../components/ChatPeople'
import {Link} from 'react-router-dom'
const Chat = [
    {
        id:1,
        image: "https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVwoq6_FXZsl1FyhsMWQNwOWdaZ5QMswdLTJzN75j-Kmcw&oe=634AB03B",
        name: "Muhammad Hassan",
        response: "Happy Birthday Usama Subhani",
        time: "Yesterday  10:20 am"
    },
    {
        id:2,
        image: "https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwqSfRbOwbPOZ11IlusU4ThKymsy95wGgqCHdKlUYA5VA&oe=6342011F",
        name: "Hassan Mujtaba",
        response: "Happy Birthday Usama Subhani 🎉🎉🎉",
        time: "Yesterday 01:39 am"
    },
    {
        id:3,
        image: "https://pps.whatsapp.net/v/t61.24694-24/296722981_610988763701283_1173040766826350660_n.jpg?ccb=11-4&oh=01_AVxtdt0xa7pvtRTTC8Ft9L1sr4s-EPEw6nLdTZzSeA7FcA&oe=633BDCCA",
        name: "Zubair Butt",
        response: "Happy Birthday Ali",
        time: "Yesterday 09:20 pm"
    },
    {
        id:4,
        image: "https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM",
        name: "Shaista Kalsoom",
        response: "Happy Birthday Ali",
        time: "26/4 10:00 pm"
    },
    {
        id:5,
        image: "https://images.unsplash.com/photo-1611298036748-97f97f810a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name: "Muhammad Ali",
        response: "Happy Birthday Usama Subhani   Stay blessed",
        time: "Yesterday 4:33 pm"
    },
    {
        id:6,
        image: "https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4",
        name: "Muhammad Mohsin",
        response: "Ameen",
        time: "Yesterday 9:44 pm"
    },
    {
        id:7,
        image: "https://media-exp1.licdn.com/dms/image/C5603AQERH2ST81M1HA/profile-displayphoto-shrink_100_100/0/1596567217523?e=1666828800&v=beta&t=srEpS3_qIgVbPhg-eRT8c9QCCov4vL1whnqLidY86i0",
        name: "Muhammad Haris",
        response: "Ameen",
        time: "Today 11:34 pm"
    },
]
function ChitNav() {

    const [ inputList, setInputList ] = useState('');
	const   [ Items, setItems ] = useState([]);

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

    <div className='navbar-chi z-50'>
      <div className='logo-i'>
            <img className='nav-logo' src="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
            alt=""
            />
            <p className='nav-title'>Chit Chat</p>
            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
        <div className='navbar-right-pc'>
          <div className='camera'>
          <BsCameraVideo className='bs'/>
          <p className='bsl'><BsTelephone className='bs rotate-3'/></p>  
            </div >
           <div className='nav-right'>
           <BsPeople className='bsp'/>
<p className='plu'><AiOutlinePlus className='pli'/></p>
<p className='num'>17</p>
           </div>
    </div>
       </div> 
    <div className='attend-pic'>
    
      <div className='date-bar'>
        <p className='left-bar'></p>
        <p className='attend-date'>Yesterday</p>
        <p className='right-bar'></p>
      </div>
     {Chat?.map((item) =>
      <ChatPeople  {...item}/>
    )}
   
     <div className='attend-people-p'>
       <Link to='space'>
        <div className='active-m'>
          <p className='active-u'>
            <span className='name-active'>You</span>
            <span className='reply'>Happy birthday Usama Subhani🎉</span>
          </p>
           <p className='time-active'>Yesterday</p>
        </div>
        </Link>
    </div>
    {Chat?.map((item) =>
      <ChatPeople  {...item}/>
    )}
       <div>
       <div className='date-bar'>
        <p className='left-bar'></p>
        <p className='attend-date'>Today</p>
        <p className='right-bar'></p>
      </div>
     {Items.map((itemval) => {

						return <Link to='space'><div className='you-in'><li className="active-mb">
                         <p className='you-a'><p className='active-ub'>
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
<Icons/>                        <button
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

export default ChitNav