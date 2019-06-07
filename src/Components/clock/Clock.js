import React, { Component } from 'react';
import './clock.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState ({
      currentTime: new Date()
    });
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div className="clock-component">
        <div className="clock-container">
          <h2>{currentTime.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}
