import Button from '@/components/Button/Button';
import Image from 'next/image';
import Hero from 'public/hero.png';
import { Fira_Code } from 'next/font/google';

const fira = Fira_Code({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className='grid grid-cols-2 gap-24 place-items-center place-content-between'>
      <div className='col-span-1 flex-1 flex flex-col gap-12'>
        <h1
          className={`text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-gray-100 ${fira.className}`}
        >
          Crafting Software That Empowers Businesses.
        </h1>
        <h2 className='text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300'>
          Molding Technology to Meet Needs. Engineering solutions that are
          efficient, scalable, and impactful.
        </h2>

        <Button url='/portfolio' text='Discover My Projects' />
      </div>
      <div className='col-span-1 place-self-end'>
        <Image width={500} height={500} alt='Hero' src={Hero} />
      </div>
    </main>
  );
}
