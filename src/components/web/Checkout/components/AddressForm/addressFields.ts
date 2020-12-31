import { TextFieldProps } from '@material-ui/core';

export const fields: TextFieldProps[] = [
  {
    required: true,
    id: 'firstName',
    name: 'first_name',
    label: 'First name',
    fullWidth: true,
    autoComplete: 'given-name',
  },
  {
    required: true,
    id: 'lastName',
    name: 'last_name',
    label: 'Last name',
    fullWidth: true,
    autoComplete: 'family-name',
  },
  {
    required: true,
    id: 'address',
    name: 'stress',
    label: 'Street',
    fullWidth: true,
    autoComplete: 'shipping address-line',
  },
  {
    required: true,
    id: 'city',
    name: 'city',
    label: 'City',
    fullWidth: true,
    autoComplete: 'shipping address-level2',
  },
  {
    required: true,
    id: 'phoneNumber',
    name: 'phone',
    label: 'Phone',
    fullWidth: true,
  },
];
