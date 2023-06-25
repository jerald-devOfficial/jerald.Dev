'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className='w-10 h-6 border border-solid border-[#53c28b70] rounded-3xl flex items-center justify-between p-0.5 relative cursor-pointer'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className='text-xs'>🌙</div>
      <div className='text-xs'>🔆</div>
      <div
        className={`w-4 h-4 bg-[#53c28b] rounded-full absolute ${
          theme === 'light' ? 'left-0.5' : 'right-0.5'
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
