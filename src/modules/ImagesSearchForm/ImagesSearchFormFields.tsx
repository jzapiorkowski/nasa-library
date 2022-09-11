import { TextField } from 'components/TextField';
import { FormValues } from './types';

export function ImagesSearchFormFields() {
  return (
    <>
      <TextField name={FormValues.QueryInput} label='Query Input' isRequired />
      <TextField name={FormValues.YearStart} label='Year start' type='number' />
      <TextField name={FormValues.YearEnd} label='Year end' type='number' />
    </>
  );
}
