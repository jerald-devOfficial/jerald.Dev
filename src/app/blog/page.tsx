import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  // console.log('data: ', data);
  return (
    <main className='grid gap-12 py-12'>
      {data.map(
        (item: { desc: string; img: string; title: string; _id: string }) => (
          <Link
            href={`/blog/${item._id}`}
            className='flex items-center gap-12'
            key={item._id}
          >
            <div className='relative h-60 w-96'>
              <Image src={item.img} alt='' fill className='object-cover' />
            </div>
            <div className='block'>
              <h1 className='font-bold text-2xl'>{item.title}</h1>
              <p className='text-lg'>{item.desc}</p>
            </div>
          </Link>
        )
      )}
    </main>
  );
};

export default Blog;
