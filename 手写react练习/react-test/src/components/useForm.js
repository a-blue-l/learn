import { useRef } from 'react'

class FormStore {
  constructor() {
    this.store = {};
    this.verification = {};
    this.error = {};
    this.components = [];
  }

  addComponents = (component) => {
    console.log(component)
    this.components.push(component)
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
    
    this.components.forEach(component => {
      component.onStoreChange();
    })
  }

  setVerification = (name, verification) => {
    this.verification[name] = verification;
  }

  // 简单验证
  verificationHandler = () => {
    for (let rule in this.verification) {
      if (this.verification.hasOwnProperty(rule)) {

        delete this.error[rule]
        
        for (let item of this.verification[rule]) {
          // requires
          if (item.require && !this.store[rule]) {
            this.error[rule] = item.message
            break
          }
        }
      }
    }

    this.components.forEach(component => {
      component.onStoreChange();
    })

    return this.error.length <= 0
  }

  getForm = () => {
    return {
      getValue: this.getValue,
      getValues: this.getValues,
      setValue: this.setValue,
      verificationHandler: this.verificationHandler,
      addComponents: this.addComponents,
      setVerification: this.setVerification,
      error: this.error
    }
  }
}

export default function useForm(form) {
  const formRef = useRef();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current]
}
