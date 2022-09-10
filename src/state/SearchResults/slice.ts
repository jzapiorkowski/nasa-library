import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchResultsTypes {
  isLoading: boolean;
  data: Array<any>;
}

const initialState: SearchResultsTypes = {
  isLoading: false,
  data: [],
};

export const SearchResults = createSlice({
  name: 'SearchResults',
  initialState,
  reducers: {
    StartLoadingAction(state: SearchResultsTypes) {
      state.isLoading = true;
    },
    GetFetchResults(state: SearchResultsTypes, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { StartLoadingAction } = SearchResults.actions;
