import { TextFieldProps } from '@material-ui/core';

export const fields: TextFieldProps[] = [
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
