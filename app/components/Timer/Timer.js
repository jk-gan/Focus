import React from 'react'
import cx from 'classnames'
import styles from './Timer.scss'

class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Return JSX via render()
    const { display, className} = this.props
    return (
      <div className={cx(
          className,
          styles.timer
        )}>
        <h1>{display}</h1>
      </div>
    );
  }
}

export default Timer
