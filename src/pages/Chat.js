import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosCheckmark, IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Menu from '../data'
import Sidebar from '../components/Sidebar';
import {BsPencil,BsCameraVideo, BsTelephone, BsPeople} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Icons from '../components/Icons'

function Chat() {
	const [item, setItem] = useState(Menu);
	const [ inputList, setInputList ] = useState('');
	const [ Items, setItems ] = useState([]);


	const filterItem = (CategoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
		 return curElem.title === CategoryItem;
		})
		setItem(updatedItems);
	   };
	
	   const EventChange = (event) => {
		   setInputList(event.target.value);
	   };
	   const ListOfItems = () => {
		   setItems((OldItems) => {
			   return [ ...OldItems, inputList ];
		   });
	   };
	return (
		<div className='flex'>
		<div className="chat-side">
			<div className="top-t">
				<h1 className="chat-title">Chat</h1>
				<div className="two-icons">
					<BiMenuAltRight className="icon-chat" />
					<BsPencilSquare className="icon-chat-w" />
				</div>
			</div>
			<div className="scroll-a">
<details open>
	<summary className='flex'>
	<div className="pin">
					<IoMdArrowDropdown />
					<p className="pinned">Pinned</p>
				</div>
	</summary>
				<div 
				 className="admin justify-between pr-3">
					 <div className='flex items-center cursor-pointer'>
					 <div className="right-items">
						
						<div className="name-logos ">
							<p className="zname">ZF</p>
						</div>
						<p className="right-2">
							<IoIosCheckmark />
						</p>
					</div> 
					<div className="zain">Zain Fiaz (You)</div>
					 </div>				
			<div className='text-[#fff] hover:text-[#444791]'>	
				<HiOutlineDotsHorizontal className='mt-2 h-4 w-4'/></div>
				</div>
</details>
			<details open>
				<summary className='flex items-center'> 
				<div className="rec">
				<IoMdArrowDropdown />
					<p className="pinned">Recent</p>
				</div>
				</summary>
<p className='px-0'>
	<button className='btn-box-w' exact onClick={() => filterItem('Attendents')}>
	<Sidebar 
	image="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?ccb=11-4&oh=01_AVwu_8Af0lwrTpNGvyMRVgjmEOY-lZsyvuumqubl9tGSAw&oe=63550871"
	name="Attendents"
	message="Mohsin: 0 out"
	time="10:00pm"
	className='flex'/>
	</button>
	<button className='btn-box-w' onClick={() => filterItem('Chit Chat')}>
	<Sidebar 
	image="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
	name="Chit Chat"
	message="Haris: Ameen"
	time="09:23pm"
	className=''/>
	</button>
	<button className='btn-box-w'  onClick={() => filterItem('Hassan Mujtaba')}>
	<Sidebar 
	exact
	image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
	name="Hassan Mujtaba"
	message="You: Walaikumassalam"
	time="07:40pm"
	className=''/>	
	</button>
	<button className='btn-box-w'  onClick={() => filterItem('Mmuhammad Hassan')}>
	<Sidebar 
	image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyzjbRRSI4gpyLSOAsFc196XuxTFvrDq7iPz63rGpr--g&oe=63537A3B"
	name="Muhammad Hassan"
	message="You: Yes"
	time="02:45pm"
	className=''/>
	</button>
		<button
		className='btn-box-w'  onClick={() => filterItem('Zubair Butt')}>
		<Sidebar 
	image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVx75ZO4Z_grtrpfZr9K-ad-rfVYISKKskRrLn8FZH-FNw&oe=63503BA1"
	name="Zubair Butt"
	message="You: I'm Fine"
	time="01:23pm"
	className=''/>
		</button>
<button
className='btn-box-w'  onClick={() => filterItem('Muhammad Mohsin')}
>
<Sidebar 
	image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
	name="Muhammad Mohsin"
	message="You: I'm fine"
	time="10:23am"
	className=''/></button>
		<button className='btn-box-w'  onClick={() => filterItem('Shaista Kalsoom')}>
		<Sidebar 
	image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
	name="Shaista Kalsoom"
	message="You: Hi Zain"
	time="10:00pm"
	className=''/>
		</button>
		<button
		className='btn-box-w'  onClick={() => filterItem('Tayyab Sir')}
		>
		<Sidebar 
	image="https://pps.whatsapp.net/v/t61.24694-24/254816431_2882568472043633_8825022336389735842_n.jpg?ccb=11-4&oh=01_AVyqhbHvcfGaVtk7JikIrctSk3sciGtE3Df4th33Uv_GOQ&oe=63537ED9"
	name="Tayyab Syed"
	message="You: Hi, Sir"
	time="06:11pm"
	className=''/>	
		</button>
	</p>
				</details>
			</div>
		</div>
<div>
 {item?.map((elem) => {
    const { logo, user, title, myrep, person,send,name} = elem;
	return (
<>
		
<div className=''>
    <div className='flex pr-14'>
<div className='flex items-center navbar-chia z-50 '>
	<div className='logo-i '>

<img className='nav-logo' 
		src={logo}
		  alt=""
		  />
		  <p className='nav-title'>{title}</p>
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
<p className='num '>{user}</p>
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
 <div className="attend-people">
			
			<div className='flex'>
			<img className="active-user" src={person} alt="" />
			<p className="right-4 ml-[-20px] mb-[5px]"><IoIosCheckmark />
									</p>
				</div>		
					<div className="active-p-chat flex flex-col mr-4">
							<p className="active-u">
								<span className="name-active">{name}</span>
								<span className="resp pl-4">Yesterday</span>
							</p>
							<p className="time-active">{send}</p>
						</div>
					</div>
 </div>
   <div className='attend-people-p mr-11'>
	
	 <div className='active-m flex flex-col '>
		<p className='active-u flex items-center justify-between'>
		  <span className='name-active '>You</span>
		  <span className='text-[13px] pl-3'>Yesterday</span>
		</p>
		 <p className='time-active'>{myrep}</p>
	  </div>

  </div>
  <div className='atp'>
  

  </div>
	 <div>
	 
   {Items.map((itemval) => {

		  return <div className='you-in mt-3 mr-11'>
	  <li className="active-mb">
			  <p className='you-a'><p className='active-ub'>
				 <span className='name-activeb'>You</span>
				  <span className='item-ti'>{itemval}</span>
				  </p>
				   <span className='tim'>Today 10:00 PM</span>

				  </p>
				  </li>
				</div>
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
 </>
	)
})
}</div>

		</div>
	);
}

export default Chat;
