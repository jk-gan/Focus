import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Return JSX via render()
    const { display } = this.props
    return (
      <div>
        <h1>{display}</h1>
      </div>
    );
  }
}

export default Timer
