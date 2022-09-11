import { configureStore } from '@reduxjs/toolkit';
import { SearchResults, SearchResultsTypes } from 'state/SearchResults/slice';

const reducer = { searchResults: SearchResults.reducer };

export const store = configureStore({
  reducer,
});

export interface StateType {
  searchResults: SearchResultsTypes;
}
