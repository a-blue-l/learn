import React from 'react';
import context from './context'
import useForm from './useForm'

export default function Form({ form, onFinish, onFinished, children }) {
  const [formInstance] = useForm(form);
  
  return (
    <form>
      <context.Provider value={formInstance}>
        {children}
      </context.Provider>
      </form>
  )
}
