// Import React
import React from 'react'

// Create Search component class
class Button extends React.Component{

  render() {
    // Return JSX via render()
    const { onClick, children } = this.props
    return (
      <button onClick={onClick}>{children}</button>
    );
  }
}

export default Button
