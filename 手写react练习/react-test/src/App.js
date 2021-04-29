import './App.css';
import Form, { Field } from './components/';

function App() {
  const [form] = Form.useForm();
  
  return (
    <div className="App">
      <Form form={form}>
        <Field name={'name'}>
          <input />
        </Field>
        <Field name={'password'}>
          <input />
        </Field>
      </Form>
    </div>
  );
}

export default App;
