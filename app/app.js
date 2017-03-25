// ES6 Component
import React from 'react';
import Timer from './components/Timer/Timer'
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.onStart = this.onStart.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onStart() {
    console.log('onStart')
  }

  onReset() {
    console.log('onReset')
  }

  // render method is most important
  // render method returns JSX template
  render() {
      return (
        <div>
          <Timer />
          <Button onClick={this.onStart}>Start</Button>
          <Button onClick={this.onReset}>Reset</Button>
        </div>
      );
  }
}

export default App
