import React from 'react'
import { Container } from '@material-ui/core';
import { Form } from './FormCompound';

export default function MyForm() {
  const formData = { name: '', email: '', password: '', gender: '' };
  const onSubmitCallback = (data) => console.log('Submitted!', data);

  return (
    <Container maxWidth="md">
      <Form formData={formData} >
        <Form.Input value="name" />
        <Form.Input value="password" />
        <Form.Input value="name" />
        <Form.RadioGroup title="Gender" value="gender" options={['Male', 'Female']} />
        <Form.Submit buttonName="Submit" onSubmitCallback={onSubmitCallback}/>
      </Form>
    </Container>
  )
}