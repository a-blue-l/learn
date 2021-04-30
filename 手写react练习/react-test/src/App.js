import { useEffect } from 'react';
import './App.css';
import Form, { Field } from './components/';

function App() {
  const [form] = Form.useForm();

  useEffect(() => {
  }, [])

  let submit = () => {
    form.verificationHandler()
  }

  return (
    <div className="App">
      <Form form={form}>
        <Field name={'name'} rules={[{require: true, message: '请填写姓名'}]}>
          <input />
        </Field>
        <Field name={'password'} rules={[{ require: true, message: '请填写密码' }]}>
          <input />
        </Field>
        <div onClick={submit}>提交数据</div>
      </Form>
    </div>
  );
}

export default App;
