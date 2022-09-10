import { useDispatch } from 'react-redux';
import { FormValues, FormValuesTypes } from './../types';
import { useCallback } from 'react';
import {
  GetFetchResults,
  StartLoadingAction,
  ActionFailed,
} from 'state/SearchResults';
import axios from 'axios';

export function useGetData() {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    () => async (values: FormValuesTypes) => {
      try {
        const { [FormValues.QueryInput]: query } = values;

        dispatch(StartLoadingAction());

        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${query}&medasjdnakdnaia_type=image`
        );

        const data = response.data.collection.items;

        dispatch(GetFetchResults(data));
      } catch (error) {
        dispatch(ActionFailed());
      }
    },
    [dispatch]
  );

  return { fetchData };
}
