import React, { useEffect, useState } from "react";
import "./Login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "./useForm";
import validate from "./validateInfo";
import Errors from "./Errors";

function Login({ setUser, user }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      //   height: "100vh",
      backgroundColor: "#0cbaba",
      //   height: "50vh",
      //   margin: "2rem",
      //   padding: "2rem",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(4, 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      //   justifyContent: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    txtfld: {
      width: "150px",
      fontSize: "11",
      marginRight: "10px",
    },
  }));

  const classes = useStyles();

  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="loginEmail"
            autoComplete="email"
            autoFocus
            value={values.loginEmail}
            onChange={handleChange}
          />
          {errors.loginEmail ? <Errors error={errors.loginEmail} /> : null}

          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="loginPass"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.loginPass}
            onChange={handleChange}
          />
          {errors.loginPass ? <Errors error={errors.loginPass} /> : null}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="primary-btn"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => {
                  setUser(!user);
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Login;
