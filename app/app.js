// ES6 Component
import React from 'react';
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 600,
      intervalId: '',
      counting: false
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
    this.setState({intervalId: '', counting: false})
    console.log('componentWillUnmount')
  }

  tick() {
    const newTime = this.state.time - 1
    if(newTime >= 0) {
      this.setState({time: newTime})
    } else {
      clearInterval(this.state.intervalId)
    }

  }

  nextMinute(currentSecond) {
    return currentSecond === 59
  }

  onStart() {
    if(!this.state.counting) {
      const intervalId = setInterval(this.tick, 1000)
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId, counting: true})
    } else {
      console.log("It's running!!!")
    }
  }

  onReset() {
    this.setState(
      {
        time: 600
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
    const { time } = this.state
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const display = `${minutes} : ${seconds}`
    return (
      <div>
        <Timer display={display}/>
        <Button onClick={this.onStart}>Start</Button>
        <Button onClick={this.onPause}>Pause</Button>
        <Button onClick={this.onReset}>Reset</Button>
      </div>
    );
  }
}

export default App
