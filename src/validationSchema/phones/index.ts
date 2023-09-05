import * as yup from 'yup';

export const phoneValidationSchema = yup.object().shape({
  number: yup.string().required(),
  type: yup.string().nullable(),
});
