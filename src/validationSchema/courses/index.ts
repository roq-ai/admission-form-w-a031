import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  duration: yup.number().integer().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
});
