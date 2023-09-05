import * as yup from 'yup';

export const addressValidationSchema = yup.object().shape({
  street: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  country: yup.string().nullable(),
  postal_code: yup.string().nullable(),
});
