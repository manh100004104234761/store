import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  makeStyles,
  colors,
} from "@material-ui/core";
import { StoreState } from "../../../../../redux/store/store";
import { IUserState } from "../../../../../redux/reducer/user.reducer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    color: "white",
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900],
    },
  },
}));
interface Props {}

const ProfileField = [
  {
    label: "First Name",
    name: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
  },
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Phone Number",
    name: "phone",
  },
  {
    label: "Address",
    name: "address",
  },
];

interface IStateValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
}

const Profile = (props: Props) => {
  const classes = useStyles();
  const user = useSelector<StoreState, IUserState>((state) => state.user);
  const [values, setValues] = useState<IStateValue>({
    firstName: user.user?.first_name! || "",
    lastName: user.user?.last_name! || "",
    email: user.user?.email! || "",
    phone: user.user?.phone! || "",
    address: user.user?.address! || "",
    birthday: user.user?.birthday! || "",
  });

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveProfile = (event: any) => {};

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              {ProfileField.map((field) => (
                <Grid key={field.name} item md={6} xs={12}>
                  <TextField
                    {...field}
                    fullWidth
                    onChange={handleChange}
                    required
                    value={values[field.name as keyof IStateValue]}
                    variant="outlined"
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className={classes.saveButton}
              type="submit"
              variant="contained"
              onClick={handleSaveProfile}
            >
              Save Changes
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
