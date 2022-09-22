import React from 'react';
import { Link } from 'react-router-dom';
function Chit() {
	return (
		<Link to="chitchat">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img">
						<img
							className="user-image"
							src="https://media-exp1.licdn.com/dms/image/C560BAQEXwbulSJEOwQ/company-logo_100_100/0/1543481551791?e=1669852800&v=beta&t=RpdW9gFwZceJTAM_yFDjV9aPgkXgp5CaofjKWacbwg8"
							alt="sssssssss"
						/>
					</div>
					<div className="user-name overflow-hidden">
						<p className="attend">Chit Chat</p>
						<p className="desc-user">Haris: Ameen</p>
					</div>
				</div>
				<div className="time">8/11</div>
			</div>
		</Link>
	);
}

export default Chit;
