import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  };

  tick() {
    this.setState( {time: new Date()} );
  };

  componentDidMount() {
    // debugger
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    debugger
    clearInterval(this.intervalId);
  }


  render() {
    let hours = this.state.time.getHours();
    let mins = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours =(hours < 10) ? `0${hours}` : hours;
    mins = (mins < 10) ? `0${mins}` : mins;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>Time:</span>
            <span>{hours}:{mins}:{seconds} PDT</span>
          </p>

          <p>
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  };

};

export default Clock;
