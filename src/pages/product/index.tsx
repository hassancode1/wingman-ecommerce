import React, {useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import {  Search } from 'lucide-react';

import { 
  fetchProducts, 
  setRatingFilter,
  setSearchQuery,
  setCurrentPage
} from '../../redux/productsSlice';
import { LoadingSpinner } from '../../components/loadingSpinnner';
import { useTheme } from '../../context/ThemeContext';
import PaginationControls from '../../components/PaginationControls';
import { selectProductsState, selectFilteredAndSortedProducts } from '../../redux/productSelector';




const Products = () => {
    const dispatch = useDispatch();
    const {theme} = useTheme()
    const { loading,  searchQuery,   currentPage, 
     ratingFilter} = useSelector(selectProductsState);
    const { products , totalPages} = useSelector(selectFilteredAndSortedProducts);

    const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {    
        const selectedRating = event.target.value === 'All' ? null : Number(event.target.value);
        dispatch(setRatingFilter(selectedRating as number ))
      };
    
      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
      };
    
    
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };
useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if(loading){
    return   <LoadingSpinner />
  }
  return (
<>
<div className='min-h-full bg-background  md:px-5 py-5 mb-2'>
<div className="flex flex-col  gap-3 md:flex-row px-8 mt-5">
<div className="relative mb-4">
    <label htmlFor="ratingFilter" className="block text-sm font-medium text-text">
        Search Products
      </label>
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`
                w-[300px] pl-10 pr-4 py-2 rounded-md
                ${theme === "dark"  
                  ? 'bg-gray-700 text-white' 
                  : ' border-gray-300 border text-black'}
                focus:outline-none focus:ring-2 focus:ring-[#66B29B]
              `}
            />
            <Search 
              className="absolute left-3 top-[66%] -translate-y-1/2 text-gray-500" 
              size={20} 
            />
          </div>
<div className="mb-4 relative">
    
      <label htmlFor="ratingFilter" className="block text-sm font-medium text-text">
        Filter by Rating
      </label>
      <div className='relative w-[300px]'>
      <select
        id="ratingFilter"
        value={ratingFilter || 'All'}
        onChange={handleRatingChange}
                 className={`block w-full h-[41px] appearance-noneborder border-gray-300 py-2 px-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  ${theme === "dark"  
                  ? 'bg-gray-700 text-white' 
                  : ' border-gray-300 border text-black'}`}>
        <option value="All">All Ratings</option>
        <option value="4">4 and above</option>
        <option value="3">3 and above</option>
        <option value="2">2 and above</option>
        <option value="1">1 and above</option>
      </select>

        </div>
    </div>
  
        </div>
        <div className="px-2 md:px-8 py-8 grid grid-cols-1 items-center gap-4 my-4 md:grid-cols-2 lg:grid-cols-4">
  {products.length > 0 ? (
    products.map((product) => (
      <div key={product.id}>
        <ProductCard
          name={product.title}
          description={product.description}
          image={product.image}
          rating={product.rating.rate}
          price={product.price}
        />
      </div>
    ))
  ) : (
    <div className="col-span-full text-center">
      <p className="text-gray-500 text-lg">
        No products available. Try adjusting your filters or check back later!
      </p>
    </div>
  )}
</div>
<div className="ml-auto w-fit">
<PaginationControls 
  currentPage={currentPage}
  onPageChange={handlePageChange}
  totalPages={totalPages}
/>
</div>
</div>
</>
  )
}

export default Products