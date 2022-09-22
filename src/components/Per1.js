import React from 'react';
import { Link } from 'react-router-dom';
function Per1() {
	return (
		<Link to="person1">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img flex">
						<img
							className="user-image"
							src="https://pps.whatsapp.net/v/t61.24694-24/294942294_349098890749265_2607315862855786782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVw5RGf7M9zTxVPmw4E55H3OavRZkX2DVD4FPw1K-oDHsw&oe=632C081F"
							alt="sssssssss"
						/>
						
					</div>
					<div className="user-name-n ml-[13px]">
						<p className="attend">Hassan Mujtaba</p>
						<p className="desc-user">Hassan: How are You..</p>

					</div>

				</div>

				<div className="time">8/24</div>

			</div>
		</Link>
	);
}

export default Per1;
