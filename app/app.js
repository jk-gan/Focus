// ES6 Component
import React from 'react';
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMinuteCount: 10,
      currentSecondCount: 60,
      intervalId: '',
    }
    this.tick = this.tick.bind(this)
    this.nextMinute = this.nextMinute.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onReset = this.onReset.bind(this)
    this.onPause = this.onPause.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId)
    this.setState({intervalId: ''})
    console.log('componentWillUnmount')
  }

  tick() {
    // setState method is used to update the state
    let newSecondCount = this.state.currentSecondCount - 1

    if(newSecondCount >= 0) {
      if(newSecondCount === 0) {
        newSecondCount = 60
      } else if(this.nextMinute(newSecondCount)) {
        const newMinuteCount = this.state.currentMinuteCount - 1
        this.setState(
          {
            currentSecondCount: newSecondCount,
            currentMinuteCount: newMinuteCount
          }
        )
      }
      this.setState({ currentSecondCount: newSecondCount })
    } else {
      clearInterval(this.state.intervalId)
    }
  }

  nextMinute(currentSecond) {
    return currentSecond === 59
  }

  onStart() {
    if(this.state.intervalId === '') {
      const intervalId = setInterval(this.tick, 1000)
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId})
    } else {
      console.log("It's running!!!")
    }
  }

  onReset() {
    this.setState(
      {
        currentMinuteCount: 10,
        currentSecondCount: 60
      }
    )
    this.componentWillUnmount()
  }

  onPause() {
    this.componentWillUnmount()
  }

  // render method is most important
  // render method returns JSX template
  render() {
    let second = this.state.currentSecondCount === 60 ? '0' : this.state.currentSecondCount
    second = second < 10 ? `0${second}` : second
    const currentCount = `${this.state.currentMinuteCount} : ${second}`
    return (
      <div>
        <Timer currentCount={currentCount}/>
        <Button onClick={this.onStart}>Start</Button>
        <Button onClick={this.onPause}>Pause</Button>
        <Button onClick={this.onReset}>Reset</Button>
      </div>
    );
  }
}

export default App
