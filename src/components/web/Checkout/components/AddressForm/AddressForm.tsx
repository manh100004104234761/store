import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { fields } from "./addressFields";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { getUserInfo } from "src/redux/action/user.action";
import { makeOderReq, UpdateUserReq } from "src/shared/type/user.type";

interface Props {
  values: makeOderReq;
  setValues: any;
}

export default function AddressForm(props: Props) {
  const dispatch = useDispatch();
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  useEffect(() => {
    (async () => {
      try {
        const result = (await dispatch(getUserInfo())) as any;
        if (result.status) {
          user.user = result.data;
        }
      } catch (err) {}
    })();
  }, [user.isLoggedIn]);

  // const [values, setValues] = useState<makeOderReq>({
  props.values.phone = user.user?.phone! || "";
  props.values.city = user.user?.city! || "";
  props.values.street = user.user?.street! || "";
  // });

  const handleChange = (event: any) => {
    props.setValues({
      ...props.values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        {fields.map((field) => (
          <Grid key={field.id} item xs={12}>
            <TextField
              {...field}
              onChange={handleChange}
              required
              value={props.values[field.name as keyof makeOderReq]}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
