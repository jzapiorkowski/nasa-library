import { ErrorMessage, Field } from 'formik';
import { styled, TextField as MuiTextField, Typography } from '@mui/material';
import { theme } from 'theme';
import { HTMLInputTypeAttribute } from 'react';

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.palette.error.main};
`;

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
}

export function TextField({
  name,
  label,
  isRequired = false,
  type = 'text',
}: TextFieldProps) {
  return (
    <>
      <Field
        name={name}
        label={label}
        as={MuiTextField}
        type={type}
        required={isRequired}
        focused
        sx={{ input: { color: theme.palette.primary.main } }}
      />
      <StyledErrorMessage name={name} component={Typography} />
    </>
  );
}
