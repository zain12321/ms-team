import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosCheckmark, IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Attendents from '../components/Attendents';
import Chit from '../components/Chit';
import Per1 from '../components/Per1';
import Per2 from '../components/Per2';
import Per3 from '../components/Per3';
import Per4 from '../components/Per4';
import Per5 from '../components/Per5';
import Per6 from '../components/Per6';
import Per7 from '../components/Per7';
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
				<div className="rec">
					<IoMdArrowDropdown />
					<p className="pinned">Recent</p>
				</div>
<Attendents />
				<Per1 />
				<Chit />
				<Per2 />
				<Per3 />
				<Per4 />
				<Per5 />
				<Per7 />
				<Per6 />
				<Attendents />
				<Per1 />
				<Chit />
				<Per2 />
				<Per3 />
				<Per4 />
				<Per5 />
				<Per7 />
				<Per6 />
				<Attendents />
			</div>
		</div>
	);
}

export default Chat;
