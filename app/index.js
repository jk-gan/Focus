// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

class Index extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <App />
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <Index /> ,
    document.getElementById('content')
);
