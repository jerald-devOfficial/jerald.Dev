import React from 'react';
import { items } from './data';
import { notFound } from 'next/navigation';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { Fira_Code } from 'next/font/google';

type Props = {
  params: {
    category: 'applications' | 'illustrations' | 'websites';
  };
};

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

const getData = (cat: 'applications' | 'illustrations' | 'websites') => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params: { category } }: Props) => {
  const data = getData(category);
  return (
    <div className='grid'>
      <h1 className='font-bold text-3xl text-[#53c28b]'>{category}</h1>

      <div className='grid py-20 gap-y-20'>
        {data.map((item) => (
          <div
            className='flex gap-12 [&:nth-child(2n)]:flex-row-reverse'
            key={item._id}
          >
            <div className='flex-1 flex flex-col gap-5 justify-center'>
              <h1 className={`text-5xl font-bold ${fira.className}`}>
                {item.title}
              </h1>
              <p className='text-xl'>{item.desc}</p>
              <Button text='See More' url='#' />
            </div>
            <div className='flex-1 h-[500px] relative'>
              <Image
                className='object-cover'
                fill={true}
                src={item.img}
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
