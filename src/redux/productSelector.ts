import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectProductsState = (state: RootState) => state.products;

export const selectFilteredAndSortedProducts = createSelector(
  [selectProductsState],
  (productsState) => {
    let filteredProducts = productsState.items;

   
    if (productsState.searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(productsState.searchQuery.toLowerCase())
      );
    }


    if (productsState.ratingFilter !== null) {
      filteredProducts = filteredProducts.filter(
        product => product.rating.rate >= (productsState.ratingFilter as number)
      );
    }

    switch (productsState.sortBy) {
      case 'price':
        filteredProducts.sort((a, b) =>
          productsState.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
        break;
      case 'rating':
        filteredProducts.sort((a, b) =>
          productsState.sortOrder === 'asc'
            ? a.rating.rate - b.rating.rate
            : b.rating.rate - a.rating.rate
        );
        break;
    }


    const startIndex = (productsState.currentPage - 1) * productsState.itemsPerPage;
    const endIndex = startIndex + productsState.itemsPerPage;

    return {
      products: filteredProducts.slice(startIndex, endIndex),
      totalProducts: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / productsState.itemsPerPage),
    };
  }
);

export const selectLoadingProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.loading
);
