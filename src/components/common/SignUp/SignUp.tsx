import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { StoreState } from "../../../redux/store/store";
import { IUserState } from "../../../redux/reducer/user.reducer";
import { RegisterReq, RegisterRes } from "../../../shared/type/user.type";
import { register } from "../../../redux/action/user.action";
import { TextColor } from "../../../shared/ultis/color";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import { FieldArr } from "./SignUpForm";
import { ImageViewer } from "..";
import { setSuccessNoti } from "src/redux/action/success.action";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #2980B9, #6DD5FA, #EDF3F6)",
  },
  margin: {
    margin: 12,
  },
  padding: {
    padding: "64px 32px",
  },
  inputContainer: {
    margin: "1px 2",
  },
}));

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

interface Props {}

export default function SingUp() {
  const classes = useStyles();
  //React Hook Function
  const dispatch = useDispatch();
  const history = useHistory();

  //Reducer State
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  // State
  const [valueForm, setValueForm] = useState<RegisterReq>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    city: "",
    street: "",
    company: "",
    phone: "",
    confirm_password: "",
    image: null,
  });

  const handleRegister = async () => {
    const result = ((await dispatch(
      register(valueForm as any)
    )) as any) as RegisterRes;
    if (result.status == true) {
      dispatch(setSuccessNoti("Register Successfully"));
      history.push("/auth/sign-in");
    }
    if (result.status == false) {
      history.push("/auth/sign-up");
    }
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/");
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <Paper elevation={3} className={classes.padding}>
          <div className={classes.margin}>
            <Grid>
              <Button onClick={() => history.push("/")}>
                <HomeIcon style={{ fontSize: 50 }} />
              </Button>
              <Typography
                variant="h5"
                component="h6"
                style={{ color: TextColor.blueDark }}
              >
                Đăng ký
              </Typography>
            </Grid>
            <Grid container>
              {FieldArr.map((field) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.inputContainer}
                  key={field.name}
                >
                  <TextField
                    {...field}
                    fullWidth
                    autoFocus
                    variant="outlined"
                    value={valueForm[field.name as keyof RegisterReq]}
                    onChange={(event) =>
                      setValueForm({
                        ...valueForm,
                        [field.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
              ))}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <ImageViewer
                  aspectRatio={4 / 3}
                  onSave={(cropData: any) => {
                    setValueForm({ ...valueForm, image: cropData });
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleRegister}
                style={{
                  textTransform: "none",
                  padding: 6,
                }}
              >
                Đăng ký
              </Button>
            </Grid>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link to="/auth/sign-in" style={{ color: TextColor.blueDark }}>
              Đã là thành viên?{" "}
              <b style={{ textDecorationLine: "underline" }}>
                Đăng nhập tại đây!
              </b>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
