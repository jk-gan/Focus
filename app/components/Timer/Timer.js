import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 5,
      seconds: 60
    }
  }

  render() {
    // Return JSX via render()
    const { minutes, seconds } = this.state
    return (
      <div>
        <h1>{minutes} : {seconds}</h1>
      </div>
    );
  }
}

export default Timer
