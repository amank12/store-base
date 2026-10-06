import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });  
import Container from '../components/global/Container';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <Providers>
        <Navbar />
        <Container className='py-20'>{children}</Container>
      </Providers>
    </body>
  </html>
);
}
