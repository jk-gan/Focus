// ES6 Component
import React from 'react'
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'
import cx from 'classnames'
import styles from './app.scss'

import FlatButton from 'material-ui/FlatButton'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 1500,
      intervalId: '',
      counting: false,
      tomatoCount: 0,
      currentStatus: 'Stop'
    }
    this.tick = this.tick.bind(this)
    this.nextMinute = this.nextMinute.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onReset = this.onReset.bind(this)
    this.onPause = this.onPause.bind(this)
    this.startWorking = this.startWorking.bind(this)
    this.startShortRest = this.startShortRest.bind(this)
    this.startLongRest = this.startLongRest.bind(this)
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
      switch(this.state.currentStatus) {
        case 'Start':
          const newTomatoCount = this.state.tomatoCount + 1
          this.setState({tomatoCount: newTomatoCount})
          if(newTomatoCount % 4 === 0) {
            this.startLongRest()
          } else {
            this.startShortRest()
          }
          break
        case 'Short':
          this.setState({time: 1500})
          this.startWorking()
          break
        case 'Long':
          this.setState({time: 1500})
          this.startWorking()
          break
      }
    }
  }

  nextMinute(currentSecond) {
    return currentSecond === 59
  }

  onStart() {
    if(!this.state.counting) {
      this.startWorking()
    } else {
      console.log("It's running!!!")
    }
  }

  onReset() {
    this.setState({time: 1500, currentStatus: 'Stop'})
    this.componentWillUnmount()
  }

  onPause() {
    this.componentWillUnmount()
  }

  startWorking() {
    this.setState({currentStatus: 'Start'})
    const intervalId = setInterval(this.tick, 1000)
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId, counting: true})
    console.log('start working')
  }

  startShortRest() {
    this.setState({time: 300, currentStatus: 'Short'})
    const intervalId = setInterval(this.tick, 1000)
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId, counting: true})
    console.log('short resting')
  }

  startLongRest() {
    this.setState({time: 1200, currentStatus: 'Long'})
    const intervalId = setInterval(this.tick, 1000)
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId, counting: true})
    console.log('long resting')
  }

  // render method is most important
  // render method returns JSX template
  render() {
    const { time, counting } = this.state
    let minutes = parseInt(time / 60, 10)
    let seconds = parseInt(time % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    const display = `${minutes} : ${seconds}`
    let appClass = ''
    if(this.state.currentStatus === 'Start') {
      appClass = styles.working
    } else if(this.state.currentStatus === 'Short' || this.state.currentStatus === 'Long') {
      appClass = styles.resting
    } else {
      appClass = styles.stop
    }

    return (
      <div className={styles.app}>
        <Timer className={appClass} display={display}/>
        {
          counting
          ? <FlatButton style={{color: '#FF605F'}} label="Pause" onTouchTap={this.onPause} />
          : <FlatButton style={{color: '#49DD8E'}} label="Start" onTouchTap={this.onStart} />
        }
        <FlatButton style={{color: '#FFD52E'}} label="Reset" onTouchTap={this.onReset} />
      </div>
    );
  }
}

export default App
