import React, { Component } from 'react';

export default class Field extends Component {
  constructor(props) {
    super(props)
    this.children = props.children;
    this.value = '';
  }

  getControlled = () => {
    return {
      value: 'default',
      onChange(e) {
        const newValue = e.target.value;
        console.log(newValue)
      }
    }
  }

  render() {
    const retureChildNode = React.cloneElement(this.children, this.getControlled());
    return retureChildNode
  }
}
