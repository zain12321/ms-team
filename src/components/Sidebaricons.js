import React from 'react';
import { VscBell, VscCalendar } from 'react-icons/vsc';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineFile } from 'react-icons/ai';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BiHelpCircle } from 'react-icons/bi';
function SidebarIcons() {
	return (
		<div className="side-ico">
			<div className="side-col">
				<div className="side-box">
					<VscBell className="side-icons" />
					<p className="side-text">Activity</p>
				</div>
					<div className="side-box-b">
						<div className="chat-active">
							<BsFillChatDotsFill className="side-icons-b" />
							<p className="chat-remain">1</p>
						</div>

						<p className="side-text-c">Chat</p>
					</div>
				<div className="side-box">
					<RiTeamLine className="side-icons " />
					<p className="side-text-t">Teams</p>
				</div>

				<div className="side-box">
					<VscCalendar className="side-icons" />
					<p className="side-text-m">Meetings</p>
				</div>

				<div className="side-box">
					<FiPhone className="side-icons" />
					<p className="side-text-ca">Calls</p>
				</div>

				<div className="side-box">
					<AiOutlineFile className="side-icons" />
					<p className="side-text-f">Files</p>
				</div>

				<div className="side-bottom">
					<div className="side-box">
						<HiOutlineDotsHorizontal className="side-icons" />
					</div>
					<div className="side-bottom-b">
						<div className="side-box">
							<AiOutlineAppstore className="side-icons" />
							<p className="side-text-a">Apps</p>
						</div>
						<div className="side-box">
							<BiHelpCircle className="side-icons" />
							<p className="side-text-h">Help</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SidebarIcons;
