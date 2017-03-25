import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 5
    }
  }

  render() {
    // Return JSX via render()
    const { minutes } = this.state
    return (
      <h1>{minutes}</h1>
    );
  }
}

export default Timer
