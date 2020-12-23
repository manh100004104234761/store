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

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    height: "100%",
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
    margin: "18px 0",
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

export interface ILoginField {
  name: string;
  type: string;
  label: string;
}
const FieldArr: ILoginField[] = [
  {
    name: "user_name",
    type: "text",
    label: "User Name",
  },
  {
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    name: "password_confirmation",
    type: "password",
    label: "Password Confirmation",
  },
];

export default function SingUp() {
  const classes = useStyles();
  //React Hook Function
  const dispatch = useDispatch();
  const history = useHistory();

  //Reducer State
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  // State
  const [valueForm, setValueForm] = useState<RegisterReq>({
    user_name: "",
    first_name: "",
    last_name: "",
    birthday: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const handleRegister = async () => {
    const result = ((await dispatch(
      register(valueForm as any)
    )) as any) as RegisterRes;
    if (result.results.token) {
      history.push("/");
    }
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/");
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} className={classes.padding}>
          <Grid>
            <Button onClick={() => history.push("/")}>
              <HomeIcon style={{ fontSize: 50 }} />
            </Button>
            <Typography
              variant="h4"
              component="h3"
              style={{ color: TextColor.blueDark }}
            >
              Đăng ký
            </Typography>
          </Grid>
          <div className={classes.margin}>
            <Grid container>
              {FieldArr.map((field) => (
                <Grid
                  item
                  xs={12}
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
