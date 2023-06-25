import { Fira_Code } from 'next/font/google';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

const Layout = ({ children }: Props) => {
  return (
    <main className='grid gap-10 py-10'>
      <h1 className={`text-8xl font-bold ${fira.className}`}>My Works</h1>
      {children}
    </main>
  );
};

export default Layout;
