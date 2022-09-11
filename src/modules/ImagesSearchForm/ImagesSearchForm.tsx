import { Button, styled } from '@mui/material';
import { Formik, Form } from 'formik';
import { usePrepareInitialValues, useGetData } from './hooks';
import { ImagesSearchFormFields } from './ImagesSearchFormFields';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

export function ImagesSearchForm() {
  const { formInitialValues } = usePrepareInitialValues();
  const { fetchData } = useGetData();

  return (
    <Formik initialValues={formInitialValues} onSubmit={fetchData()}>
      <StyledForm>
        <ImagesSearchFormFields />
        <StyledButton variant='contained' type='submit'>
          Search
        </StyledButton>
      </StyledForm>
    </Formik>
  );
}
