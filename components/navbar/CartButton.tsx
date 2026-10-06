import { buttonVariants } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

async function CartButton() {
  // temp
  const numItemsInCart = 9;
  return (
    
    <Link 
      href='/' 
      className={cn(
        buttonVariants({ size: 'icon', variant: 'outline' }), // Pass your shadcn configuration here
        'flex justify-center items-center relative'
      )}
    >
      <LuShoppingCart className='w-9 h-9' />
      <span className='absolute -top-4 -right-4 bg-blue-500 text-black rounded-full h-4 w-4 flex items-center justify-center text-xs'>
          {numItemsInCart}
      </span>
    </Link>
  );
}
export default CartButton;