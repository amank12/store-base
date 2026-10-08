import Navbar from '@/components/navbar/Navbar';
import { Toaster } from "@/components/ui/sonner"
import './globals.css';
import { Inter, Geist } from 'next/font/google';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });  
import Container from '../components/global/Container';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang='en' suppressHydrationWarning className={cn("font-sans", geist.variable)}>
    <body className={inter.className}>
      <Providers>
        <Navbar />
        <Container className='py-20'>{children}</Container>
        <Toaster />
      </Providers>
    </body>
  </html>
);
}
