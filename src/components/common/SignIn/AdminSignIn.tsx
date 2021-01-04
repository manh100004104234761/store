import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { LoginReq, LoginRes } from "../../../shared/type/user.type";
import { StoreState } from "../../../redux/store/store";
import { IUserState } from "../../../redux/reducer/user.reducer";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/action/user.action";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

interface Props {}

export interface ILoginField {
  name: string;
  type: string;
  label: string;
}

const FieldArr: ILoginField[] = [
  {
    name: "email",
    type: "text",
    label: "Email của bạn",
  },
  {
    name: "password",
    type: "password",
    label: "Mật khẩu",
  },
];

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

export default function SignIn(props: Props) {
  const classes = useStyles();

  //React Hook Function
  const dispatch = useDispatch();
  const history = useHistory();

  //Reducer State
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const [valueForm, setValueForm] = useState<LoginReq>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // Logic login here
    const result = ((await dispatch(login(valueForm))) as any) as LoginRes;
    if (result.data.jwt) {
      history.push("/admin/");
    }
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/admin/");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Button onClick={() => history.push("/")}>
          <HomeIcon style={{ fontSize: 50 }} />
        </Button>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
                  value={valueForm[field.name as keyof LoginReq]}
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
              onClick={handleLogin}
              style={{
                textTransform: "none",
                padding: 6,
              }}
            >
              Đăng nhập
            </Button>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
