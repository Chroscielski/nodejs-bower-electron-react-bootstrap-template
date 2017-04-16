import React from 'react';
import ReactDOM from 'react-dom';

//Import components
import Content from '../components/content.jsx';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someData: "No data"
    };
  }

  getData() {
    this.setState({ someData: "Some data" });
  }

  render() {
    return (
      <Content
        someData={this.state.someData}
        getData={this.getData.bind(this)} />
    );
  }
}