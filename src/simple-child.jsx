import React from 'react';

let i = 0;

export default class SimpleChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      'SimpleChild - constructor()',
      arguments,
      this.element
    );
  }

  componentWillMount() {
    console.log(
      'SimpleChild - componentWillMount()',
      arguments,
      this.element
    );
  }

  componentWillReceiveProps() {
    console.log(
      'SimpleChild - componentWillReceiveProps()',
      arguments,
      this.element
    );
  }

  componentWillUpdate() {
    console.log(
      'SimpleChild - componentWillUpdate()',
      arguments,
      this.element
    );
  }

  render() {
    console.log(
      'SimpleChild - render()',
      arguments,
      this.element
    );
    return (
      <div ref={(div) => { this.element = div; }}>
        SimpleChild, thing = {this.props.thing}
      </div>
    );
  }

  componentDidMount() {
    console.log(
      'SimpleChild - componentDidMount()',
      arguments,
      this.element
    );
    const div = document.createElement('div');
    const text = document.createTextNode('SimpleChild rogue <div> ' + i++);
    div.appendChild(text);
    this.element.appendChild(div);
  }

  componentDidUpdate() {
    console.log(
      'SimpleChild - componentDidUpdate()',
      arguments,
      this.element
    );
  }

  componentWillUnmount() {
    console.log(
      'SimpleChild - componentWillUnmount()',
      arguments,
      this.element
    );
  }
}