import React from "react";
import "./Signup.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "./useForm";
import validate from "./validateInfo";
import Errors from "./Errors";

function Signup({ setUser, user }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#0cbaba",
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
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            className={classes.txtfld}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Full Name"
            name="username"
            autoFocus
            value={values.username}
            onChange={handleChange}
          />
          {errors.username ? <Errors error={errors.username} /> : null}

          <TextField
            className={classes.txtfld}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone No."
            type="text"
            id="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone ? <Errors error={errors.phone} /> : null}
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="text"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email ? <Errors error={errors.email} /> : null}
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password ? <Errors error={errors.password} /> : null}

          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="cpassword"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 ? <Errors error={errors.password2} /> : null}

          <Button type="submit" variant="contained" className="primary-btn">
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

export default Signup;
