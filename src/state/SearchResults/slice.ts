import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchResultsTypes {
  isLoading: boolean;
  data: Array<Record<string, {}>>;
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
    GetFetchResults(
      state: SearchResultsTypes,
      action: PayloadAction<Array<Record<string, {}>>>
    ) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { StartLoadingAction, GetFetchResults } = SearchResults.actions;
