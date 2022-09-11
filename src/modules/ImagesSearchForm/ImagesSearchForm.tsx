import { Button, styled } from '@mui/material';
import { Formik, Form } from 'formik';
import { usePrepareInitialValues, useGetData } from './hooks';
import { ImagesSearchFormFields } from './ImagesSearchFormFields';
import * as Yup from 'yup';
import { FormValues } from './types';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

export function ImagesSearchForm() {
  const { formInitialValues } = usePrepareInitialValues();
  const { fetchData } = useGetData();

  const validationSchema = Yup.object().shape({
    [FormValues.YearStart]: Yup.number()
      .min(2000, 'invalid year')
      .max(2022, 'invalid year'),
    [FormValues.YearEnd]: Yup.number()
      .min(2000, 'invalid year')
      .max(2022, 'invalid year'),
  });

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={fetchData()}
    >
      <StyledForm>
        <ImagesSearchFormFields />
        <Button variant='contained' type='submit'>
          Search
        </Button>
      </StyledForm>
    </Formik>
  );
}
