import Link from 'next/link';
import React from 'react';
type Props = {
  text: string;
  url: string;
};

function Button({ text, url }: Props) {
  return (
    <Link href={url}>
      <button className='px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white cursor-pointer w-max transition-colors duration-300'>
        {text}
      </button>
    </Link>
  );
}

export default Button;
