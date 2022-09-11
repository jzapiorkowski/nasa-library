import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchResultsTypes {
  isLoading: boolean;
  data: Array<Record<string, {}>>;
  isFailed: boolean;
}

const initialState: SearchResultsTypes = {
  isLoading: false,
  data: [],
  isFailed: false,
};

export const SearchResults = createSlice({
  name: 'SearchResults',
  initialState,
  reducers: {
    StartLoadingAction(state: SearchResultsTypes) {
      state.isLoading = true;
      state.isFailed = false;
    },
    GetFetchResults(
      state: SearchResultsTypes,
      action: PayloadAction<Array<Record<string, {}>>>
    ) {
      state.isLoading = false;
      state.isFailed = false;
      state.data = action.payload;
    },
    ActionFailed(state: SearchResultsTypes) {
      state.isFailed = true;
      state.isLoading = false;
    },
  },
});

export const { StartLoadingAction, GetFetchResults, ActionFailed } =
  SearchResults.actions;
