import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCount: 10,
      intervalId: ''
    }
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000)
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId})
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId)
  }

  timer() {
    // setState method is used to update the state
    const newCount = this.state.currentCount - 1
    if(newCount >= 0) {
      this.setState({ currentCount: newCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }

  render() {
    // Return JSX via render()
    return (
      <div>
        <h1>{this.state.currentCount}</h1>
      </div>
    );
  }
}

export default Timer
