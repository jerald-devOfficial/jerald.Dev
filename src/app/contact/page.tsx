import Button from '@/components/Button/Button';
import { Fira_Code } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Jerald - Contact Information',
  description: 'This is the contact page of my website',
};

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

const Contact = () => {
  return (
    <main className='grid gap-y-24 place-items-center'>
      <h1 className={`text-6xl font-bold ${fira.className}`}>
        Let&apos;s Keep in Touch
      </h1>
      <div className='grid grid-cols-2 gap-12 w-full'>
        <div className='block col-span-1 relative h-[500px]'>
          <Image
            src='/contact.png'
            alt='Contact Hero'
            fill={true}
            className='object-contain animate-move'
          />
        </div>
        <form className='grid gap-5 col-span-1'>
          <input
            type='text'
            placeholder='name'
            className='p-5 bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] text-xl font-bold'
          />
          <input
            type='text'
            placeholder='email'
            className='p-5 bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] text-xl font-bold'
          />
          <textarea
            className='p-5 bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] text-xl font-bold'
            placeholder='message'
            cols={30}
            rows={10}
          ></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </main>
  );
};

export default Contact;
