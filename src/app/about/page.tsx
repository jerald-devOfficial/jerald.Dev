'use client';

import Button from '@/components/Button/Button';
import { Fira_Code } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

const Abput = () => {
  return (
    <main className='grid gap-y-12 py-16'>
      <div className='relative h-[300px]'>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt=''
          className='object-cover grayscale'
        />
        <div className='absolute bottom-5 left-5 bg-[#53c28b] text-white p-2'>
          <h1 className={`font-bold text-3xl ${fira.className}`}>
            Digital Storytellers
          </h1>
          <h2 className='font-semibold text-2xl'>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='flex-1 flex flex-col gap-y-8'>
          <h1 className={`font-bold text-3xl ${fira.className}`}>Who Am I?</h1>
          <p className='font-light text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className='flex-1 flex flex-col gap-y-8'>
          <h1 className={`font-bold text-3xl ${fira.className}`}>What I Do?</h1>
          <p className='font-light text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </main>
  );
};

export default Abput;
