import * as yup from 'yup';

export const qualificationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  level: yup.number().integer().nullable(),
});
