import { Formik, Form } from 'formik';
import { FormValues } from '../types';
import { ImagesSearchFormFields } from './ImagesSearchFormFields';

export function ImagesSearchForm() {
  return (
    <Formik
      initialValues={{ [FormValues.QueryInput]: '' }}
      onSubmit={() => console.log('done')}
    >
      <Form>
        <ImagesSearchFormFields />
      </Form>
    </Formik>
  );
}
