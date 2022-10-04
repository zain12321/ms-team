import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';
function Per4() {
	return (
		<Link to="person4">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img flex">
						<img
							className="user-image"
							src="https://pps.whatsapp.net/v/t61.24694-24/266945871_784062612869051_8230589337531865786_n.jpg?ccb=11-4&oh=01_AVxjJhp8YUxxUxoSaC4HxdlWe_2E6zY1eGxUMOSR0eSgnw&oe=634BD6A1"
							alt=""
						/>
						<p className="right-4">
							<IoIosCheckmark />
						</p>
					</div>
					<div className="user-name-n">
						<p className="attend">Zubair Butt</p>
						<p className="desc-user">You: I'm ok Mamo How are</p>
					</div>
				</div>
				<div className="time">8/06</div>
			</div>
		</Link>
	);
}

export default Per4;
