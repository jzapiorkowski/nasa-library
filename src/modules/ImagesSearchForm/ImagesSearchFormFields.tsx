import { TextField } from 'components/TextField/TextField';
import { FormValues } from './types';

export function ImagesSearchFormFields() {
  return (
    <TextField name={FormValues.QueryInput} label='Query Input' isRequired />
  );
}
