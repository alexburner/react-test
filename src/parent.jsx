import React from 'react';

import ConditionalChild from 'conditional-child.jsx';
import SimpleChild from 'simple-child.jsx';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent - constructor()', arguments);
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

        Parent's simple child:
        <SimpleChild thing={this.props.thing} />

        Parent's conditional child, plain:
        {this.props.thing === 'A' ?
          <ConditionalChild name="plain" thing={this.props.thing} /> :
          <ConditionalChild name="plain" thing={this.props.thing} />
        }

        Parent's conditional child, alternating wrapper:
        {this.props.thing === 'A' ?
          <header>
            <ConditionalChild name="wrapped" thing={this.props.thing} />
          </header> :
          <footer>
            <ConditionalChild name="wrapped" thing={this.props.thing} />
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