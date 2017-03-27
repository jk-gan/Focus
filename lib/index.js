// ES6 Component
// Import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'

injectTapEventPlugin()

class Index extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <App />
          </MuiThemeProvider>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <Index /> ,
    document.getElementById('content')
);
