import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { FieldArr2 } from "src/components/common/SignUp/SignUpForm";
import { UpdateUserReq } from "src/shared/type/user.type";
import { getUserInfo, updateUserInfo } from "src/redux/action/user.action";
import { setSuccessNoti } from "src/redux/action/success.action";
import { ImageViewer } from "src/components/common";
import { ImageProfileUrl } from "src/shared/ultis/intl.utils";

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

const Profile = (props: Props) => {
  const classes = useStyles();
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

  const [values, setValues] = useState<UpdateUserReq>({
    username: user.user?.username! || "",
    first_name: user.user?.first_name! || "",
    last_name: user.user?.last_name! || "",
    email: user.user?.email! || "",
    phone: user.user?.phone! || "",
    city: user.user?.city! || "",
    street: user.user?.street! || "",
    company: user.user?.company! || "",
    image: null,
  });
  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveProfile = async (event: any) => {
    try {
      let formData = new FormData();
      formData.append("image", values.image);
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("phone", values.phone);
      formData.append("city", values.city);
      formData.append("stress", values.street);
      formData.append("company", values.company);

      let result;
      if (values.image) {
        result = await dispatch(updateUserInfo(formData));
      } else {
        result = await dispatch(updateUserInfo(values));
      }
      if (Boolean(result)) {
        dispatch(setSuccessNoti("Thay đổi thông tin thành công"));
        await dispatch(getUserInfo());
      }
    } catch (err) {}
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              {FieldArr2.map((field) => (
                <Grid key={field.name} item md={6} xs={12}>
                  <TextField
                    {...field}
                    fullWidth
                    onChange={handleChange}
                    required
                    value={values[field.name as keyof UpdateUserReq]}
                    variant="outlined"
                  />
                </Grid>
              ))}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <ImageViewer
                  src={`${ImageProfileUrl}/small/${user.user?.image}`}
                  aspectRatio={4 / 3}
                  onSave={(cropData: any) => {
                    setValues({ ...values, image: cropData });
                  }}
                />
              </Grid>
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
