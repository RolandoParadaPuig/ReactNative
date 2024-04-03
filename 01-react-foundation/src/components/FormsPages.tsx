import React from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  email: string,
  password: string
}

export const FormsPages: React.FC = () => {

  const { register, handleSubmit, formState } = useForm<FormInputs>({
    defaultValues: {
      email: 'rolando@gmail.com',
      password: 'hola123',
    }
  });
  const onSubmit = (data: FormInputs) => {
    console.log({ data });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Forms</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" placeholder='Email' {...register('email', { required: true })}/>
          <input type='password' placeholder='Password' {...register('password')}/>
          <button type='submit'>Save</button>
        </div>
      </form>
      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  )
}
