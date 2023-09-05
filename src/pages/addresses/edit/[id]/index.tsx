import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getAddressById, updateAddressById } from 'apiSdk/addresses';
import { addressValidationSchema } from 'validationSchema/addresses';
import { AddressInterface } from 'interfaces/address';

function AddressEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<AddressInterface>(
    () => (id ? `/addresses/${id}` : null),
    () => getAddressById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: AddressInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateAddressById(id, values);
      mutate(updated);
      resetForm();
      router.push('/addresses');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<AddressInterface>({
    initialValues: data,
    validationSchema: addressValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Addresses',
              link: '/addresses',
            },
            {
              label: 'Update Address',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Address
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.street}
            label={'Street'}
            props={{
              name: 'street',
              placeholder: 'Street',
              value: formik.values?.street,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.city}
            label={'City'}
            props={{
              name: 'city',
              placeholder: 'City',
              value: formik.values?.city,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.state}
            label={'State'}
            props={{
              name: 'state',
              placeholder: 'State',
              value: formik.values?.state,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.country}
            label={'Country'}
            props={{
              name: 'country',
              placeholder: 'Country',
              value: formik.values?.country,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.postal_code}
            label={'Postal Code'}
            props={{
              name: 'postal_code',
              placeholder: 'Postal Code',
              value: formik.values?.postal_code,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/addresses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'address',
    operation: AccessOperationEnum.UPDATE,
  }),
)(AddressEditPage);
