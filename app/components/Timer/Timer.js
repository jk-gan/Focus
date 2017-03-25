import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Return JSX via render()
    const { currentCount } = this.props
    return (
      <div>
        <h1>{currentCount}</h1>
      </div>
    );
  }
}

export default Timer
