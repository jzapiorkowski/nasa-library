import { Formik, Form } from 'formik';
import { usePrepareInitialValues, useGetData } from '../hooks';
import { ImagesSearchFormFields } from './ImagesSearchFormFields';

export function ImagesSearchForm() {
  const { formInitialValues } = usePrepareInitialValues();
  const { fetchData } = useGetData();

  return (
    <Formik initialValues={formInitialValues} onSubmit={fetchData()}>
      <Form>
        <ImagesSearchFormFields />
      </Form>
    </Formik>
  );
}
