import React from 'react';

import ConditionalChild from 'conditional-child.jsx';
import SimpleChild from 'simple-child.jsx';

export default class Parent extends React.Component {
  constructor(props) {
    console.log('Parent - constructor()', arguments);
    super(props);
  }

  componentWillMount() {
    console.log('Parent - componentWillMount()', arguments);
  }

  componentWillReceiveProps() {
    console.log('Parent - componentWillReceiveProps()', arguments);
  }

  componentWillUpdate() {
    console.log('Parent - componentWillUpdate()', arguments);
  }

  render() {
    console.log('Parent - render()', arguments);
    return (
      <div className={this.props.thing}>
        <h3>Parent, thing = {this.props.thing}</h3>
        <SimpleChild thing={this.props.thing} />
        {this.props.thing === 'A' ?
          <header>
            <ConditionalChild thing={this.props.thing} />
          </header> :
          <footer>
            <ConditionalChild thing={this.props.thing} />
          </footer>
        }
      </div>
    );
  }

  componentDidMount() {
    console.log('Parent - componentDidMount()', arguments);
  }

  componentDidUpdate() {
    console.log('Parent - componentDidUpdate()', arguments);
  }

  componentWillUnmount() {
    console.log('Parent - componentWillUnmount()', arguments);
  }
}