import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  father_name: yup.string().nullable(),
  qualification: yup.string().nullable(),
  course_to_join: yup.string().nullable(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  aadhar_no: yup.string().nullable(),
  description: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
