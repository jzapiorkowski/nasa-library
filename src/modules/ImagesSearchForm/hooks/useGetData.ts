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

  const prepareAdditionalFields = useCallback(
    (values: FormValuesTypes) =>
      Object.keys(values).reduce(
        //@ts-ignore
        (additionalFields: string, currentKey: FormValues) => {
          if (currentKey === FormValues.QueryInput) {
            return additionalFields;
          }

          if (!!values[currentKey]) {
            const additionalParam = `&${currentKey}=${values[currentKey]}`;

            return additionalFields + additionalParam;
          }

          return additionalFields;
        },
        ''
      ),
    []
  );

  const fetchData = useCallback(
    () => async (values: FormValuesTypes) => {
      try {
        const { [FormValues.QueryInput]: query } = values;
        dispatch(StartLoadingAction());

        const additionalParams = prepareAdditionalFields(values);
        const preparedURL = `https://images-api.nasa.gov/search?q=${query}&media_type=image${additionalParams}`;

        const response = await axios.get(preparedURL);
        const data = response.data.collection.items;

        dispatch(GetFetchResults(data));
      } catch (error) {
        dispatch(ActionFailed());
      }
    },
    [dispatch, prepareAdditionalFields]
  );

  return { fetchData };
}
