import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({
  searchParams,
}: {  
  searchParams: { layout?: string; search?: string };
}) {
  const { layout, search} = await searchParams
  
  
  const layoutValue = layout || 'grid';
  const searchValue = search || '';
  console.log('product page, searchParams:', layoutValue, searchValue);
  return (

    <>
      <ProductsContainer layout={layoutValue} search={searchValue} />
    </>
  );
}
export default ProductsPage;