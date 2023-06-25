import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  const galleries = [
    {
      title: 'Illustrations',
      image: 'bg-[url("/illustration.png")]',
    },
    {
      title: 'Websites',
      image: 'bg-[url("/websites.jpg")]',
    },
    {
      title: 'Applications',
      image: 'bg-[url("/apps.jpg")]',
    },
  ];
  return (
    <div className='grid gap-y-5'>
      <h1 className='font-semibold text-2xl'>Choose a gallery</h1>
      <div className='flex gap-12'>
        {galleries.map((gallery) => (
          <Link
            key={gallery.title}
            href={`/portfolio/${gallery.title.toLowerCase()}`}
            className={`border-4 border-solid border-[#bbb] w-[300px] h-[400px] relative bg-cover group ${gallery.image}`}
          >
            <span className='absolute right-2.5 bottom-10 group-hover:text-[#53c28b] font-bold text-4xl'>
              {gallery.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
