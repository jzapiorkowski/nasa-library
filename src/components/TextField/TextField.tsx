import { Field } from 'formik';
import { useMemo } from 'react';

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export function TextField({
  name,
  label,
  placeholder,
  isRequired = false,
}: TextFieldProps) {
  const fieldLabelText = useMemo(
    () => `${label}${isRequired ? '*' : ''}`,
    [label, isRequired]
  );

  return (
    <>
      {label && <label>{fieldLabelText}</label>}
      <Field name={name} label={label} placeholder={placeholder} />
    </>
  );
}
