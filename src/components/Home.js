import React, { useEffect, useState } from "react";
// import "./Login.css";
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
import Signup from "./Signup";
import Login from "./Login";

function Home() {
  const [user, setUser] = useState(true);
  const [email, setEmail] = useState("");

  const handleChange = () => {
    console.log("checked");
  };

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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    txtfld: {
      width: "150px",
      fontSize: "11",
      marginRight: "10px",
    },
  }));

  const classes = useStyles();

  return (
    <div data-aos="slide-right">
      <Container
        maxWidth="xl"
        style={{
          //   backgroundColor: "orange",
          height: "90vh",
          display: "flex",
          paddingTop: "3rem",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            // backgroundColor: "red",
            display: "flex",
            height: "60vh",
          }}
        >
          <Grid
            container
            component="main"
            className={classes.root}
            style={{}}
            elevation={4}
          >
            {/* <CssBaseline /> */}
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              className={classes.image}
            ></Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} square>
              {user ? (
                <Login setUser={setUser} user={user} />
              ) : (
                <Signup setUser={setUser} user={user} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
