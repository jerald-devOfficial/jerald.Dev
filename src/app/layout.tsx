import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
export const metadata = {
  title: 'Jerald - Software Engineer',
  description:
    'Experienced Software Engineer specializing in modern web development and architecture. Explore my portfolio to see how I turn ideas into reality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`
        ${roboto.className} 
        flex flex-col min-h-screen 
        dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 
        bg-gradient-to-r from-blue-100 to-gray-100 
        dark:text-gray-100 text-gray-800 
        transition-all ease-linear duration-1000 
        justify-between max-w-screen-2xl px-16 2xl:px-0 mx-auto no-underline
      `}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
