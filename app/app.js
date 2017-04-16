//React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Import Container component
import AppContainer from './containers/app.container.jsx'

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

// Render to index.html
window.onload = function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}