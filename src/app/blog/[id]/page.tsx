'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await fetch(`${process.env.API_URL}/api/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: Props) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const Post = async ({ params }: Props) => {
  const data = await getData(params.id);
  return (
    <main className='grid gap-12'>
      <div className='flex'>
        <div className='flex flex-1 flex-col justify-between'>
          <h1 className='font-bold text-4xl'>{data.title}</h1>
          <p className='text-lg font-light'>{data.content}</p>
          <div className='flex items-center gap-2.5'>
            <div className='block relative h-10 w-10'>
              <Image
                src={data.img}
                alt={data.title}
                fill
                className='object-cover rounded-full'
              />
            </div>
            <span className='font-light text-lg'>{data.username}</span>
          </div>
        </div>
        <div className='flex-1 h-[300px] relative'>
          <Image
            src={data.img}
            alt={data.title}
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='grid gap-5'>
        <p className='text-xl font-light text-justify text-[#999]'>
          {data.content}
        </p>
      </div>
    </main>
  );
};

export default Post;
