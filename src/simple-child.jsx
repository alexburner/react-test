import React from 'react';

let rogueCount = 0;

export default class SimpleChild extends React.Component {
  constructor(props) {
    console.log('SimpleChild - constructor()', arguments);
    super(props);
  }

  componentWillMount() {
    console.log('SimpleChild - componentWillMount()', arguments);
    console.log('SimpleChild - this.element', this.element);
  }

  componentWillReceiveProps() {
    console.log('SimpleChild - componentWillReceiveProps()', arguments);
    console.log('SimpleChild - this.element', this.element);
  }

  componentWillUpdate() {
    console.log('SimpleChild - componentWillUpdate()', arguments);
    console.log('SimpleChild - this.element', this.element);
  }

  render() {
    console.log('SimpleChild - render()', arguments);
    return (
      <div ref={(div) => { this.element = div; }}>
        SimpleChild, thing = {this.props.thing}
      </div>
    );
  }

  componentDidMount() {
    console.log('SimpleChild - componentDidMount()', arguments);
    console.log('SimpleChild - this.element', this.element);
    const div = document.createElement('div');
    const text = document.createTextNode('SimpleChild rogue <div> ' + rogueCount++);
    div.appendChild(text);
    this.element.appendChild(div);
  }

  componentDidUpdate() {
    console.log('SimpleChild - componentDidUpdate()', arguments);
    console.log('SimpleChild - this.element', this.element);
  }

  componentWillUnmount() {
    console.log('SimpleChild - componentWillUnmount()', arguments);
    console.log('SimpleChild - this.element', this.element);
  }
}