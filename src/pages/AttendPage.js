import React, { useState } from 'react'
import AttendPeople from '../components/AttendPeople'
// import Navbar from '../components/Navbar'
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'
const active = [
    {
        id:1,
        image: "https://pps.whatsapp.net/v/t61.24694-24/185693124_742853110413590_6497556900064262340_n.jpg?ccb=11-4&oh=01_AVzeEEc7gxmpVBAeusqN1YFEm1GLxg4uEqPz63krGNqVdw&oe=631828C8",
        name: "Muhammad Hassan",
        response: "1 in",
        time: "Yesterday  10:20 am"
    },
    {
        id:2,
        image: "https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVyLIgZ3ZyDVj7pzGJNEB9yYrYEE3a36iTMfxV6S4WHkvA&oe=631A741F",
        name: "Hassan Mujtaba",
        response: "1 in",
        time: "Yesterday 01:39 am"
    },
    {
        id:3,
        image: "https://pps.whatsapp.net/v/t61.24694-24/296722981_610988763701283_1173040766826350660_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyoBOPsoPFOVeJ-I97YIRjVTD7xsaVVhzrKYOA7i4r1rw&oe=6318B4CA",
        name: "Zubair Butt",
        response: "1 Out",
        time: "Yesterday 09:20 pm"
    },
    {
        id:4,
        image: "https://pps.whatsapp.net/v/t61.24694-24/218736926_1625930677599906_2144598701770163038_n.jpg?ccb=11-4&oh=01_AVxY50y1ScJcE-UBpzdj2mKdXoDqx8eSgXF871JI4jUJ-A&oe=631AE33E",
        name: "Shaista Kalsoom",
        response: "1 Checkin",
        time: "26/4 10:00 pm"
    },
    {
        id:5,
        image: "https://pps.whatsapp.net/v/t61.24694-24/264959746_430150888586176_3090982840595277959_n.jpg?ccb=11-4&oh=01_AVzwkMLBq-R9IQK63ymdVgxr7J_LwM3xMv8tq8qIPQUBfA&oe=63185D91",
        name: "Muhammad Ali",
        response: "1 break",
        time: "Yesterday 4:33 pm"
    },
    {
        id:6,
        image: "https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4",
        name: "Muhammad Mohsin",
        response: "0 Out",
        time: "Yesterday 9:44 pm"
    },
    {
        id:7,
        image: "https://media-exp1.licdn.com/dms/image/C5603AQERH2ST81M1HA/profile-displayphoto-shrink_100_100/0/1596567217523?e=1666828800&v=beta&t=srEpS3_qIgVbPhg-eRT8c9QCCov4vL1whnqLidY86i0",
        name: "Muhammad Haris",
        response: "1 in",
        time: "Today 11:34 pm"
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
    <div>
        
    <div className='navbar'>
      <div className='logo-i'>
            <img className='nav-logo' src="https://pps.whatsapp.net/v/t61.24694-24/237469084_472594491265339_8092715740756466713_n.jpg?ccb=11-4&oh=01_AVz9Bn2gDlHqkxxhZha5KRdbOwJn1-GdFy93jUFVqMrx0w&oe=63192349"
            alt=""
            />
            <p className='nav-title'>Attendents</p>
            <BsPencil/>
            <p className='nav-title-ca'>
                <span className='nav-title-c'>Chat</span>
            <span className='cb'></span>
            </p>
            <p className='nav-title-f'>Files</p>
<AiOutlinePlus/>
        </div>
        <div className='navbar-right'>
          <div className='camera'>
          <BsCameraVideo className='bs'/>

          <BsTelephone className='bs bsl'/>
           
            </div >
           <div className='nav-right'>
           <BsPeople className='bsp'/>
<p className='plu'><AiOutlinePlus className='pli'/></p>
<p className='num'>17</p>
       
           </div>
      
    </div>
     
       </div>
    <div className='attend-p'>
    
      <div className='date-bar'>
        <p className='left-bar'></p>
        <p className='attend-date'>Yesterday</p>
        <p className='right-bar'></p>
      </div>
     {active?.map((item) =>
      <AttendPeople  {...item}/>
    )}
   
     <div className='attend-people-p'>
       
        <div className='active-m'>
          <p className='active-u'>
            <span className='name-active'>You</span>
            <span>1 in</span>
          </p>
           <p className='time-active'>Yesterday</p>
        </div>
   
    </div>
    {active?.map((item) =>
      <AttendPeople  {...item}/>
    )}
       <div>
     {Items.map((itemval) => {

			return <div className='you-in'><li className="active-mb">
                         <p className='you-a'><p className='active-ub'>
                            <span className='name-activeb'>You</span>
                          <span>{itemval}</span></p> <span>Today 10:00 PM</span></p></li>
                          </div>
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
						<RiSendPlane2Line className="text-center h-6 w-6 m-1 outline-none" />
					</button>
</div>
    </div>
    
    </div>
    </div>

  )
}

export default AttendPage