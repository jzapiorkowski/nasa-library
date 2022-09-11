export enum FormValues {
  QueryInput = 'QueryInput',
  YearStart = 'YearStart',
  YearEnd = 'YearEnd',
}

export interface FormValuesTypes {
  [FormValues.QueryInput]: string;
  [FormValues.YearStart]: number | '';
  [FormValues.YearEnd]: number | '';
}
