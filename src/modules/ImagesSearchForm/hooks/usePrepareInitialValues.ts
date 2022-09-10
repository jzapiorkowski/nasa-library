import { useMemo } from 'react';
import { FormValues, FormValuesTypes } from '../types';

export function usePrepareInitialValues() {
  const formInitialValues = useMemo(
    (): FormValuesTypes => ({
      [FormValues.QueryInput]: '',
    }),
    []
  );

  return { formInitialValues };
}
