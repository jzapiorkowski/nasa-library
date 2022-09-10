import { Field } from 'formik';
import { TextField as MuiTextField } from '@mui/material';

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export function TextField({ name, label, isRequired = false }: TextFieldProps) {
  return (
    <Field
      name={name}
      label={label}
      as={MuiTextField}
      type='text'
      required={isRequired}
    />
  );
}
