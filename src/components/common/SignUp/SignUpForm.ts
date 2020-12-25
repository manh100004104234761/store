
export interface ISignInField {
  name: string;
  type: string;
  label: string;
}
export const FieldArr: ISignInField[] = [
  {
    name: "username",
    type: "text",
    label: "User Name",
  },
  {
    name: "phone",
    type: "text",
    label: "Phone",
  },
  {
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    name: "city",
    type: "text",
    label: "City",
  },
  {
    name: "stress",
    type: "text",
    label: "Stress",
  },
  {
    name: "company",
    type: "text",
    label: "Company",
  },

  {
    name: "first_name",
    type: "text",
    label: "First Name",
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    name: "confirm_password",
    type: "password",
    label: "Confirm password",
  },
];
