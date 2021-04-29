import React from 'react';
import useForm from './useForm'

export default function Form({ form, onFinish, onFinished, children }) {
  const [formInstance] = useForm(form);
  const context = React.createContext();

  return (
    <context.Provider value={formInstance}>
      <form>{children}</form>
    </context.Provider>
  )
}
