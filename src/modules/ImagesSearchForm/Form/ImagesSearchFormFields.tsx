import { TextField } from '../../../components/TextField/TextField';
import { FormValues } from '../types';

export function ImagesSearchFormFields() {
  return (
    <TextField
      name={FormValues.QueryInput}
      placeholder='Type your query here'
      label='Query Input'
      isRequired
    ></TextField>
  );
}
