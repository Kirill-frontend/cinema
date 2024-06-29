'use client'

import { useState } from 'react';
import './style.css'
import clsx from 'clsx';
import signUp from '../firebase/auth/signup';
import Link from 'next/link';

export default function Page() {
  const [toggle, setToggle] = useState(false) // false is login - true is sign up
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const toggleHandler = () => {
    setToggle(prev => (!prev))
    setEmail('')
    setPassword('')
  }

  const formHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (toggle) {
      const { result, error } = await signIn(email, password);
      if (error) {
        return console.log(error)
      }

      // else successful
      console.log(result)

    } else {
      const { result, error } = await signUp(email, password);
      if (error) {
        return console.log(error)
      }

      // else successful
      console.log(result)
    }
  }


  return (
    <div className="login-page">
      <div className="form" onSubmit={formHandler}>
        <form className={clsx('register-form', { "visible": toggle })}>
          <div className="title flex text-white mb-2">  <Link href={'/'} className='mr-3'>&larr;</Link> Login </div>
          <input type="email" onChange={e => setEmail(e.target.value)} placeholder="email address" required />
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" required />
          <button type='submit'>create</button>
          <p className="message" >Already registered? <span onClick={toggleHandler}>Sign In</span></p>
        </form>
        <form className={clsx('login-form', { "visible": !toggle })}>
          <div className="title flex text-white mb-2">  <Link href={'/'} className='mr-3'>&larr;</Link> Sign in </div>
          <input type="email" onChange={e => setEmail(e.target.value)} placeholder="email address" required />
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" required />
          <button type='submit'>login</button>
          <p className="message">Not registered? <span onClick={toggleHandler}>Create an account</span></p>
        </form>
      </div>
    </div>
  );
}