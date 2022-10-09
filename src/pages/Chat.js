import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosCheckmark, IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Per5 from '../components/Per5';
function Chat() {
	return (
		<div className="chat-side">
			<div className="top-t">
				<h1 className="chat-title">Chat</h1>
				<div className="two-icons">
					<BiMenuAltRight className="icon-chat" />
					<BsPencilSquare className="icon-chat-w" />
				</div>
			</div>
			<div className="scroll-a">
				<div className="pin">
					<IoMdArrowDropdown />
					<p className="pinned">Pinned</p>
				</div>
<Link to='space'>
				<div className="admin justify-between pr-3">
					 <div className='flex items-center'>
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
				</Link>
			<details open>
				<summary className='flex items-center'> 
				<div className="rec">
				<IoMdArrowDropdown />
					<p className="pinned">Recent</p>
				</div>
				</summary>
<p>
	<Link to='/'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
	name="Attendents"
	message="Mohsin: 0 out"
	time="10:00pm"
	className=''/>
	</Link>
	<Link to="chitchat">
	<Per5 
	image="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
	name="Chit Chat"
	message="Haris: amen"
	time="09:23pm"
	className=''/>
	</Link>
	<Link to='person1'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
	name="Hassan Mujtaba"
	message="You hi"
	time="07:40pm"
	className=''/>	
	</Link>	
	<Link to="person2">
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyzjbRRSI4gpyLSOAsFc196XuxTFvrDq7iPz63rGpr--g&oe=63537A3B"
	name="Muhammad Hassan"
	message="You hi"
	time="02:45pm"
	className=''/>
	</Link>
		<Link to="person4">	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVx75ZO4Z_grtrpfZr9K-ad-rfVYISKKskRrLn8FZH-FNw&oe=63503BA1"
	name="Zubair Butt"
	message="You hi"
	time="01:23pm"
	className=''/></Link>	
	<Link to="person3"><Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
	name="Muhammad Mohsin"
	message="You hi"
	time="10:23am"
	className=''/>
		</Link>
		<Link to="person5">
		<Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
	name="Shaista Kalsoom"
	message="You hi"
	time="10:00pm"
	className=''/>
		</Link>
		
		<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/254816431_2882568472043633_8825022336389735842_n.jpg?ccb=11-4&oh=01_AVyqhbHvcfGaVtk7JikIrctSk3sciGtE3Df4th33Uv_GOQ&oe=63537ED9"
	name="Tayyyab Syed"
	message="You hi"
	time="06:11pm"
	className=''/>
		<Link to='/'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
	name="Attendents"
	message="Mohsin: 0 out"
	time="10:00pm"
	className=''/>
	</Link>
	<Link to="chitchat">
	<Per5 
	image="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
	name="Chit Chat"
	message="Haris: amen"
	time="09:23pm"
	className=''/>
	</Link>
	<Link to='person1'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
	name="Hassan Mujtaba"
	message="You hi"
	time="07:40pm"
	className=''/>	
	</Link>	
	<Link to="person2">
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyzjbRRSI4gpyLSOAsFc196XuxTFvrDq7iPz63rGpr--g&oe=63537A3B"
	name="Muhammad Hassan"
	message="You hi"
	time="02:45pm"
	className=''/>
	</Link>
		<Link to="person4">	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVx75ZO4Z_grtrpfZr9K-ad-rfVYISKKskRrLn8FZH-FNw&oe=63503BA1"
	name="Zubair Butt"
	message="You hi"
	time="01:23pm"
	className=''/></Link>	
	<Link to="person3"><Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
	name="Muhammad Mohsin"
	message="You hi"
	time="10:23am"
	className=''/>
		</Link>
		<Link to="person5">
		<Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
	name="Shaista Kalsoom"
	message="You hi"
	time="10:00pm"
	className=''/>
		</Link>
		
		<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/254816431_2882568472043633_8825022336389735842_n.jpg?ccb=11-4&oh=01_AVyqhbHvcfGaVtk7JikIrctSk3sciGtE3Df4th33Uv_GOQ&oe=63537ED9"
	name="Tayyyab Syed"
	message="You hi"
	time="06:11pm"
	className=''/>
		<Link to='/'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
	name="Attendents"
	message="Mohsin: 0 out"
	time="10:00pm"
	className=''/>
	</Link>
	<Link to="chitchat">
	<Per5 
	image="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
	name="Chit Chat"
	message="Haris: amen"
	time="09:23pm"
	className=''/>
	</Link>
	<Link to='person1'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
	name="Hassan Mujtaba"
	message="You hi"
	time="07:40pm"
	className=''/>	
	</Link>	
	<Link to="person2">
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyzjbRRSI4gpyLSOAsFc196XuxTFvrDq7iPz63rGpr--g&oe=63537A3B"
	name="Muhammad Hassan"
	message="You hi"
	time="02:45pm"
	className=''/>
	</Link>
		<Link to="person4">	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVx75ZO4Z_grtrpfZr9K-ad-rfVYISKKskRrLn8FZH-FNw&oe=63503BA1"
	name="Zubair Butt"
	message="You hi"
	time="01:23pm"
	className=''/></Link>	
	<Link to="person3"><Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
	name="Muhammad Mohsin"
	message="You hi"
	time="10:23am"
	className=''/>
		</Link>
		<Link to="person5">
		<Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
	name="Shaista Kalsoom"
	message="You hi"
	time="10:00pm"
	className=''/>
		</Link>
		
		<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/254816431_2882568472043633_8825022336389735842_n.jpg?ccb=11-4&oh=01_AVyqhbHvcfGaVtk7JikIrctSk3sciGtE3Df4th33Uv_GOQ&oe=63537ED9"
	name="Tayyyab Syed"
	message="You hi"
	time="06:11pm"
	className=''/>
		<Link to='/'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
	name="Attendents"
	message="Mohsin: 0 out"
	time="10:00pm"
	className=''/>
	</Link>
	<Link to="chitchat">
	<Per5 
	image="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
	name="Chit Chat"
	message="Haris: amen"
	time="09:23pm"
	className=''/>
	</Link>
	<Link to='person1'>
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?ccb=11-4&oh=01_AVwcXY92DG5GTl_qiYxpV2pR-5lpIPj3_JEhakx8pDHxGg&oe=6353951F"
	name="Hassan Mujtaba"
	message="You hi"
	time="07:40pm"
	className=''/>	
	</Link>	
	<Link to="person2">
	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyzjbRRSI4gpyLSOAsFc196XuxTFvrDq7iPz63rGpr--g&oe=63537A3B"
	name="Muhammad Hassan"
	message="You hi"
	time="02:45pm"
	className=''/>
	</Link>
		<Link to="person4">	<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVx75ZO4Z_grtrpfZr9K-ad-rfVYISKKskRrLn8FZH-FNw&oe=63503BA1"
	name="Zubair Butt"
	message="You hi"
	time="01:23pm"
	className=''/></Link>	
	<Link to="person3"><Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
	name="Muhammad Mohsin"
	message="You hi"
	time="10:23am"
	className=''/>
		</Link>
		<Link to="person5">
		<Per5 
	image="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
	name="Shaista Kalsoom"
	message="You hi"
	time="10:00pm"
	className=''/>
		</Link>
		
		<Per5 
	image="https://pps.whatsapp.net/v/t61.24694-24/254816431_2882568472043633_8825022336389735842_n.jpg?ccb=11-4&oh=01_AVyqhbHvcfGaVtk7JikIrctSk3sciGtE3Df4th33Uv_GOQ&oe=63537ED9"
	name="Tayyyab Syed"
	message="You hi"
	time="06:11pm"
	className=''/>
				
				</p>
				</details>
			</div>
		</div>
	);
}

export default Chat;
