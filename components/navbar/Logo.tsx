import Link from 'next/link';
import { VscCode } from 'react-icons/vsc';
import { buttonVariants } from '../ui/button'; // 👈 Import the design variants
import { cn } from '@/lib/utils'; // 👈 Your shadcn class merger utility

function Logo() {
  return (
    <Link 
      href='/' 
      className={cn(
        buttonVariants({ size: 'icon', variant: 'default' }), // Pass your shadcn configuration here
        'flex justify-center items-center relative'
      )}
    >
      <VscCode className='w-9 h-9' />
    </Link>
  );
}
export default Logo;