import Logo from './Logo';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import CartButton from './CartButton';
import NavSearch from './NavSearch';
import Container from '../global/Container';
import { Suspense } from 'react';
function Navbar() {
  return (
  <nav className='border-b'>    
  <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
      <Logo />
      <Suspense>
      <NavSearch />
      </Suspense>
      <div className='flex gap-4 items-center'> 
        <LinksDropdown />
        <DarkMode />
        <CartButton />
      </div>
  </Container>
  </nav>

  );
}
export default Navbar;