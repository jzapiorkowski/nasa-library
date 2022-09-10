import { useMemo } from 'react';
import { FormValues } from '../types';

export function usePrepareInitialValues() {
  const formInitialValues = useMemo(
    () => ({
      [FormValues.QueryInput]: '',
    }),
    []
  );

  return { formInitialValues };
}
