import React from 'react';
import {Link} from 'react-router-dom'
function Per5() {
	return (
		<Link to='person5'>
		<div className="chat-box">
			<div className="chat-img">
				<div className="user-img">
					<img
						className="user-image"
						src="https://media-exp1.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1666828800&v=beta&t=LtdZYtr0D40I48Esfa1bZqISFuMORRzToffG0U-DBsM"
						alt="sssssssss"
					/>
				</div>
				<div className="user-name">
					<p className="attend">Shaista Kalsoom</p>
					<p className="desc-user">You: ok</p>
				</div>
			</div>
			<div className="time">7/28</div>
		</div>
		</Link>
	);
}

export default Per5;
