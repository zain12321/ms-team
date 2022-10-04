import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

function AttendPeople(props) {
	const { name, image, response, time } = props;
	return (
		<div className="attend-people">
			<div className="flex">
				<img className="active-user" src={image} alt="" />
				<p className="right-4 ml-[-20px] ">
					<IoIosCheckmark />
				</p>
			</div>
			<div className="active-p">
				<p className="active-u">
					<span className="name-active">{name}</span>
					<span className="res">{response}</span>
				</p>
				<p className="time-active">{time}</p>
			</div>
		</div>
	);
}

export default AttendPeople;
