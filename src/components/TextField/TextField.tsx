import { Field } from 'formik';
import { TextField as MuiTextField } from '@mui/material';
import { theme } from 'theme';

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
      focused
      sx={{ input: { color: theme.palette.primary.main } }}
    />
  );
}
