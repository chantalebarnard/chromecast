import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Clock from '../clock/Clock'
import GreetingMessage from './../greetingMessage/GreetingMessage';
import './photo.css';

const Photo = (props) => {
	return (
		<Carousel infiniteLoop useKeyboardArrows autoPlay interval={3000} showThumbs={false}>
			{props.collection && props.collection.length && props.collection.map((image, i) => {
				return (
					<div className="carousel-image" key={i}>
						<div className="background-image" style={{ backgroundImage: `url(${image.urls.regular})` }}>
							<GreetingMessage />
							<Clock />
						</div>
					</div>
				)
			})}
		</Carousel>
	)
}

export default Photo;
