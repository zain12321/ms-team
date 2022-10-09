import React from 'react';
import {Link} from 'react-router-dom'
function Per5({image, name, message, time}) {
	return (
	
		<div className="chat-box">
			<div className="chat-img">
				<div className="user-img">
					<img
						className="user-image"
							src={image}
						alt="image"
					/>
				</div>
				<div className="user-name">
					<p className="attend">{name}</p>
					<p className="desc-user">{message}</p>
				</div>
			</div>
			<div className="time">{time}</div>
		</div>
	
	);
}

export default Per5;
