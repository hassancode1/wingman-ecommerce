import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: 'price' | 'rating' | 'default';
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
  ratingFilter: number | null;
}

export const fetchProducts = createAsyncThunk<
  Product[], 
  void, 
  { 
    state: { products: ProductsState },
    rejectValue: string 
  }
>(
  'products/fetchProducts', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch products');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: '',
    sortBy: 'default',
    sortOrder: 'asc',
    currentPage: 1,
    itemsPerPage: 8,
    ratingFilter: null
  } as ProductsState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setRatingFilter: (state, action: PayloadAction<number>) => {
        state.ratingFilter = action.payload;
      },
    setSorting: (state, action: PayloadAction<{
      sortBy: 'price' | 'rating' | 'default', 
      sortOrder?: 'asc' | 'desc'
    }>) => {
      state.sortBy = action.payload.sortBy;
      if (action.payload.sortOrder) {
        state.sortOrder = action.payload.sortOrder;
      }
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, setSorting, setCurrentPage  ,setRatingFilter  } = productsSlice.actions;

export default productsSlice.reducer;