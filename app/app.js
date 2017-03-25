// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/Timer/Timer'

class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <Timer />
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <App /> ,
    document.getElementById('content')
);
