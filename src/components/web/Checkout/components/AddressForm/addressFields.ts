import { TextFieldProps } from '@material-ui/core';

export const fields: TextFieldProps[] = [
  {
    required: true,
    id: 'firstName',
    name: 'firstName',
    label: 'First name',
    fullWidth: true,
    autoComplete: 'given-name',
  },
  {
    required: true,
    id: 'lastName',
    name: 'lastName',
    label: 'Last name',
    fullWidth: true,
    autoComplete: 'family-name',
  },
  {
    required: true,
    id: 'address',
    name: 'address',
    label: 'Address',
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
    name: 'phoneNumber',
    label: 'Phone Number',
    fullWidth: true,
  },
];
