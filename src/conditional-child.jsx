import React from 'react';

let rogueCount = 0;

export default class ConditionalChild extends React.Component {
  constructor(props) {
    console.log('ConditionalChild - constructor()', arguments);
    super(props);
  }

  componentWillMount() {
    console.log('ConditionalChild - componentWillMount()', arguments);
    console.log('ConditionalChild - this.element', this.element);
  }

  componentWillReceiveProps() {
    console.log('ConditionalChild - componentWillReceiveProps()', arguments);
    console.log('ConditionalChild - this.element', this.element);
  }

  componentWillUpdate() {
    console.log('ConditionalChild - componentWillUpdate()', arguments);
    console.log('ConditionalChild - this.element', this.element);
  }

  render() {
    console.log('ConditionalChild - render()', arguments);
    return (
      <div ref={(div) => { this.element = div; }}>
        ConditionalChild, thing = {this.props.thing}
      </div>
    );
  }

  componentDidMount() {
    console.log('ConditionalChild - componentDidMount()', arguments);
    console.log('ConditionalChild - this.element', this.element);
    const div = document.createElement('div');
    const text = document.createTextNode('ConditionalChild rogue <div> ' + rogueCount++);
    div.appendChild(text);
    this.element.appendChild(div);
  }

  componentDidUpdate() {
    console.log('ConditionalChild - componentDidUpdate()', arguments);
    console.log('ConditionalChild - this.element', this.element);
  }

  componentWillUnmount() {
    console.log('ConditionalChild - componentWillUnmount()', arguments);
    console.log('ConditionalChild - this.element', this.element);
  }
}