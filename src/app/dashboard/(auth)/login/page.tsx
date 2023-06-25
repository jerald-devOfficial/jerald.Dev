'use client';

import { signIn, useSession } from 'next-auth/react';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    signIn('credentials', {
      email,
      password,
    });
  };
  return (
    <main className='grid gap-10 place-content-center place-items-center relative'>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='dark:text-[#bbb] text-[#111] font-bold text-3xl'>
          Welcome Back!
        </h1>
        <h2 className='text-xl font-semibold'>
          Please sign in to see the dashboard.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-5'>
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
          Login
        </button>
      </form>
      <div className='flex gap-2 items-center w-[300px]'>
        <hr className='flex-grow border-t border-solid border-[#d7d9ea]' />
        <span className='font-semibold text-sm'>OR</span>
        <hr className='flex-grow border-t border-solid border-[#d7d9ea]' />
      </div>
      <div className='w-[300px] grid'>
        <button
          className='py-5 w-[inherit] content bg-blue-500 text-white font-bold text-sm rounded-md'
          onClick={() => signIn('google')}
        >
          Login with Google
        </button>
      </div>
    </main>
  );
};

export default Login;
