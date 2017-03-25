// Import React
import React from 'react'
import styles from './HelloWorld.scss'


// Create Search component class
class HelloWorld extends React.Component{

  render() {
    // Return JSX via render()
    return (
      <h1 className={styles.title}>Hello World!!!</h1>
    );
  }

}

export default HelloWorld
