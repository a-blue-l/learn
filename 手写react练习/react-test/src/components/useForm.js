import { useRef } from 'react'

class FormStore {
  constructor() {
    this.store = {};
  }

  getValue = (name) => {
    return this.store[name]
  }

  getValues = () => {
    return { ...this.store }
  }

  setValue = (data) => {
    this.store = {
      ...this.store,
      ...data
    }
  }

  getForm = () => {
    return {
      getValue: this.getValue,
      getValues: this.getValues,
      setValue: this.setValue
    }
  }
}

export default function useForm(form) {
  const formRef = useRef();

  if(!formRef.current) {
    if(form){
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current]
}
