import { Formik, Form } from 'formik';
import { usePrepareInitialValues } from '../hooks';
import { ImagesSearchFormFields } from './ImagesSearchFormFields';

export function ImagesSearchForm() {
  const { formInitialValues } = usePrepareInitialValues();

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={() => console.log('done')}
    >
      <Form>
        <ImagesSearchFormFields />
      </Form>
    </Formik>
  );
}
