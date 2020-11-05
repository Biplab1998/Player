import React from "react";
import "./Profile.css";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Email from "@material-ui/icons/Email";
import LocalPhone from "@material-ui/icons/LocalPhone";

function Profile() {
  return (
    <div>
      {/* <Container maxWidth="xl"> */}
      <Grid container style={{}}>
        <Grid item lg={7} style={{ backgroundColor: "white" }}>
          <Container
            maxWidth="sm"
            style={{
              height: "60vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Paper elevation={0}>
              <Typography variant="h3" style={{ textAlign: "center" }}>
                {/* <Person fontSize="large" style={{ margin: "0 5rem" }} /> */}
                Biplab Paul
              </Typography>
            </Paper>
            <Paper className="paper-style">
              <Email />
              <Typography variant="h5">bittupaul1998@gmail.com</Typography>
            </Paper>
            <Paper className="paper-style">
              <LocalPhone />
              <Typography variant="h5">+917004466712</Typography>
            </Paper>
          </Container>
        </Grid>
        <Grid item lg={5} style={{ justifyContent: "center" }}>
          <img
            src="./img/profile11.png"
            alt=""
            style={{
              height: "90vh",
              overrflow: "hidden",
              // backgroundColor: "red",
            }}
          />
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
    // <Container maxWidth="xl" style={{ background: "white", height: "45vh" }}>
    //   <Paper elevation={0} style={styles.paperContainer}>
    //     {/* <Cards album={album} /> */}
    //   </Paper>
    //   <Paper style={styles.paper2Container}></Paper>
    //   {/* <Paper style={{ height: 700, width: 70, justifyContent: "center"  }} /> */}
    //   {/* <Container maxWidth="xs"></Container> */}
    // </Container>
  );
}

export default Profile;
