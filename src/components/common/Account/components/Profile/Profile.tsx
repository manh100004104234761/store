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
import { FieldArr } from "src/components/common/SignUp/SignUpForm";

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

interface IStateValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  stress: string;
  company: string;
}

const Profile = (props: Props) => {
  const classes = useStyles();
  const user = useSelector<StoreState, IUserState>((state) => state.user);
  const [values, setValues] = useState<IStateValue>({
    firstName: user.user?.first_name! || "",
    lastName: user.user?.last_name! || "",
    email: user.user?.email! || "",
    phone: user.user?.phone! || "",
    city: user.user?.city! || "",
    stress: user.user?.stress! || "",
    company: user.user?.company! || "",
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
              {FieldArr.map((field) => (
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
