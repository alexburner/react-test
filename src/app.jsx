import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Parent from 'parent.jsx';

class App extends React.Component {
  constructor(props) {
    console.log('App - constructor()', arguments);
    super(props);
    this.state = {
      thing: 'A',
    };
    this.handleClick = (e) => {
      console.log('App - handleClick()', arguments);
      if (this.state.thing === 'A') {
        this.setState({thing: 'B'}, () => {
          console.log('App - state.thing is now B');
        });
      } else {
        this.setState({thing: 'A'}, () => {
          console.log('App - state.thing is now A');
        });
      }
    };
  }

  componentWillMount() {
    console.log('App - componentWillMount()', arguments);
  }

  componentWillReceiveProps() {
    console.log('App - componentWillReceiveProps()', arguments);
  }

  componentWillUpdate() {
    console.log('App - componentWillUpdate()', arguments);
  }

  render() {
    console.log('App - render()', arguments);
    return (
      <div onClick={this.handleClick}>
        <Parent thing={this.state.thing} />
      </div>
    );
  }

  componentDidMount() {
    console.log('App - componentDidMount()', arguments);
  }

  componentDidUpdate() {
    console.log('App - componentDidUpdate()', arguments);
  }

  componentWillUnmount() {
    console.log('App - componentWillUnmount()', arguments);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);