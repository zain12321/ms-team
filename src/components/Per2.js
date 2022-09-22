import React from 'react';
import { Link } from 'react-router-dom';
function Per2() {
	return (
		<Link to="person2">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img flex">
						<img
							className="user-image"
							src="https://pps.whatsapp.net/v/t61.24694-24/302011825_791584021994328_3988356719852908480_n.jpg?ccb=11-4&oh=01_AVyf68NEa8iroHhHmDY5zh3cjZFONYHT-szbPs3wzJUj3A&oe=63391C3B"
							alt=""
						/>
	
					</div>
					<div className="user-name-n ml-[14px]">
						<p className="attend">Muhammad Hassan</p>
						<p className="desc-user">You: Walaikumassalam</p>
					</div>
				</div>
				<div className="time">8/27</div>
			</div>
		</Link>
	);
}

export default Per2;
