import Image from 'next/image';
import React from 'react';

const images = ['Facebook', 'Instagram', 'Twitter', 'Youtube'];

const Footer = () => {
  return (
    <footer className='flex py-6 items-center justify-between'>
      <p className='text-sm'>
        &copy;{new Date().getFullYear()} jerald.Dev. All rights reserved.
      </p>
      <div className='flex relative gap-x-2 opacity-60'>
        {images.map((image, i) => (
          <Image
            src={`/${i + 1}.png`}
            width={15}
            height={15}
            alt={image}
            key={i}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
