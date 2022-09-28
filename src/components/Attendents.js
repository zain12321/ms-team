import React from 'react';
import { Link } from 'react-router-dom';
function Attendents() {
	return (
		<Link to="/">
			<div className="chat-box">
				<div className="chat-img">
					<div className="user-img">
						<img
							className="user-image"
							src="https://pps.whatsapp.net/v/t61.24694-24/299350061_2122296387962552_8776200068908557247_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxwDpZumAcD8B32MK8Svd---zfwe375pLimlkA-kLQwRA&oe=63437471"
							alt=""
						/>
					</div>
					<div className="user-name">
						<p className="attend">Attendents</p>
						<p className="desc-user">Mohsin: 0 out</p>
					</div>
				</div>
				<div className="time">10:12</div>
			</div>
		</Link>
	);
}

export default Attendents;
