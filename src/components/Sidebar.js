import React from 'react';


function Sidebar({ image, name, message, time }) {
	
	return (

		<div className="chat-box pt-1">
			<div className="chat-img">
				<div className="user-img">
					<img className="user-image mt-[2px]" src={image} alt="image" />
				</div>
				<div className="user-name">
					<p className="attend">{name}</p>
					<p className="desc-user ">{message}</p>
				</div>
			</div>
			<div className="time">{time}</div>
		</div>
	);
}

export default Sidebar;
