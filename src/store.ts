import { configureStore } from '@reduxjs/toolkit';
import { SearchResults } from 'state/SearchResults/slice';

const reducer = { searchResults: SearchResults.reducer };

export const store = configureStore({
  reducer,
});
