import React from 'react';

let i = 0;

export default class ConditionalChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      'ConditionalChild (' + this.getName() + ') - constructor()',
       arguments,
       this.element
    );
  }

  getName() {
    return this.props && this.props.name ? this.props.name : '';
  }

  componentWillMount() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentWillMount()',
      arguments,
      this.element
    );
  }

  componentWillReceiveProps() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentWillReceiveProps()',
      arguments,
      this.element
    );
  }

  componentWillUpdate() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentWillUpdate()',
      arguments,
      this.element
    );
  }

  render() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - render()',
      arguments,
      this.element
    );
    return (
      <div ref={(div) => { this.element = div; }}>
        ConditionalChild, thing = {this.props.thing}
      </div>
    );
  }

  componentDidMount() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentDidMount()',
      arguments,
      this.element
    );
    const div = document.createElement('div');
    const text = document.createTextNode('ConditionalChild rogue <div> ' + i++);
    div.appendChild(text);
    this.element.appendChild(div);
  }

  componentDidUpdate() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentDidUpdate()',
      arguments,
      this.element
    );
  }

  componentWillUnmount() {
    console.log(
      'ConditionalChild (' + this.getName() + ') - componentWillUnmount()',
      arguments,
      this.element
    );
  }
}