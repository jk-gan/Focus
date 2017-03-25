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
    this.timer = this.timer.bind(this)
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

  // shouldComponentUpdate() {
  //   return this.state.counting
  // }

  onStart() {
    if(this.state.intervalId === '') {
      const intervalId = setInterval(this.timer, 1000)
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
    const currentCount = `${this.state.currentMinuteCount} : ${this.state.currentSecondCount}`
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
