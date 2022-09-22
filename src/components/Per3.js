import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
function Per3() {
	return (
		<Link to="person3">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img flex">
						<img
							className="user-image"
							src="https://media-exp1.licdn.com/dms/image/C5103AQH5yB-RUqugPg/profile-displayphoto-shrink_100_100/0/1521962589360?e=1666828800&v=beta&t=vbp8Iv5Z82ZK-1Ezr37nmHWPY3ezmGPt-5myo-TFOM4"
							alt=""
						/>
	                    <p className="right-5">
							<IoIosCheckmark />
						</p>
					</div>
					<div className="user-name-n">
						<p className="attend">Muhammad Mohsin</p>

						<p className="desc-user">You:I'm ok bro you say</p>
					</div>
				</div>
				<div className="time">8/17</div>
			</div>
		</Link>
	);
}

export default Per3;
