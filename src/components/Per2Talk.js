import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

function Per2Talk(props) {
	const { name, image, response, time } = props;

	return (
		<div className="attend-people">
			<div className="flex">
				<img className="active-user" src={image} alt="" />
				<p className="right-4 ml-[-20px] mb-[0px]">
					<IoIosCheckmark />
				</p>
			</div>{' '}
			<div className="active-p-chat">
				<p className="active-u">
					<span className="name-active">{name}</span>
					<span className="resp">{response}</span>
				</p>
				<p className="time-active">{time}</p>
			</div>
		</div>
	);
}

export default Per2Talk;
