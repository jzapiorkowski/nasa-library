export enum FormValues {
  QueryInput = 'query_input',
  YearStart = 'year_start',
  YearEnd = 'year_end',
}

export interface FormValuesTypes {
  [FormValues.QueryInput]: string;
  [FormValues.YearStart]: number | '';
  [FormValues.YearEnd]: number | '';
}
