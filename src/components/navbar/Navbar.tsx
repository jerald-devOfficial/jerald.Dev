'use client';

import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { Fira_Code } from 'next/font/google';

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <header className='h-24 flex items-center justify-between'>
      <Link
        className={`font-black text-2xl text-gray-800 dark:text-gray-100 ${fira.className}`}
        href={'/'}
      >
        jerald.Dev
      </Link>
      <nav className='flex items-center gap-5 text-sm font-medium text-gray-800 dark:text-gray-300'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className='p-1 border-none bg-blue-700 hover:bg-blue-600  text-white cursor-pointer rounded transition-colors duration-300'
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
