import React, { Component } from 'react';
import context from './context'

export default class Field extends Component {
  static contextType = context;

  componentDidMount() {
    // 添加组件
    this.context.addComponents(this)
    this.context.setVerification(this.props.name, this.props.rules)
  }

  onStoreChange = () => {
    this.forceUpdate();
  }

  getControlled = () => {
    const { name } = this.props;
    const { getValue, setValue } = this.context;
    
    return {
      value: getValue(name) || '',
      onChange(e) {
        const newValue = e.target.value;
        setValue({
          [name]: newValue
        })
      }
    }
  }

  render() {
    const { error } = this.context;
    const { children, name } = this.props;
    const retureChildNode = React.cloneElement(children, this.getControlled());
    return (
      <div>
        {retureChildNode}
        {error[name] && <span style={{ color: 'red' }}>{error[name]}</span>}
      </div>
    )
  }
}
