import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMinuteCount: 10,
      currentSecondCount: 60,
      intervalId: ''
    }
    this.timer = this.timer.bind(this)
    this.nextMinute = this.nextMinute.bind(this)
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
    let newSecondCount = this.state.currentSecondCount - 1
    const newMinuteCount = this.state.currentMinuteCount - 1
    if(newSecondCount >= 0) {
      if(this.nextMinute(newSecondCount)) {
        newSecondCount = 60
        this.setState(
          {
            currentSecondCount: newSecondCount,
            currentMinuteCount: newMinuteCount
          }
        )
      } else {
        this.setState({ currentSecondCount: newSecondCount })
      }
    } else {
      clearInterval(this.state.intervalId)
    }
  }

  nextMinute(currentSecond) {
    return currentSecond === 0
  }

  render() {
    // Return JSX via render()
    const currentCount = `${this.state.currentMinuteCount} : ${this.state.currentSecondCount}`

    return (
      <div>
        <h1>{currentCount}</h1>
      </div>
    );
  }
}

export default Timer
