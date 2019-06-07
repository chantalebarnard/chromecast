import React from 'react';

import './greetingMessage.css'

const GreetingMessage = () => {
	const currentTime = new Date();
	const time = currentTime.getHours();
	if (time < 12) {
		return <div className="greeting-container"><strong>Good Morning.</strong></div>
	}
	if (time >= 12 && time < 17) {
		return <div className="greeting-container"><strong>Good Afternoon.</strong></div>
	} else {
		return <div className="greeting-container"><strong>Good Evening.</strong></div>
	}
}

export default GreetingMessage;
