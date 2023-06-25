'use client';

import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <main className='grid place-items-center gap-10'>
      <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-5'>
        <input
          type='text'
          name='name'
          placeholder='Username'
          required
          className='p-5 bg-transparent border-2 border-solid border-[#bbb] text-[#bbb] rounded-md text-md font-medium'
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          required
          className='p-5 bg-transparent border-2 border-solid border-[#bbb] text-[#bbb] rounded-md text-md font-medium'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
          className='p-5 bg-transparent border-2 border-solid border-[#bbb] text-[#bbb] rounded-md text-md font-medium'
        />
        <button
          type='submit'
          className='w-full p-5 cursor-pointer bg-[#53c28b] border-none rounded-md text-[#eee] font-bold'
        >
          Register
        </button>
        {error && 'Something went wrong!'}
      </form>
      <div className='flex gap-2 items-center w-[300px]'>
        <hr className='flex-grow border-t border-solid border-[#d7d9ea]' />
        <span className='font-semibold text-sm'>OR</span>
        <hr className='flex-grow border-t border-solid border-[#d7d9ea]' />
      </div>
      <Link className='' href='/dashboard/login'>
        Login with an existing account
      </Link>
    </main>
  );
};

export default Register;
