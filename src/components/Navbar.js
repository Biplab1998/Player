import "./Navbar.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Navbar() {
  //   const [btnState, setBtnState] = useState("Albums");
  //   const [hrefState, setHrefState] = useState("/albums");

  //   const handleButton = (e) => {
  //     // e.preventDefault();
  //     setBtnState("Home");
  //     setHrefState("/");
  //   };

  //   const handleIcon = (e) => {
  //     e.preventDefault()
  //     <Link to="/profile"></Link>
  //   }
  return (
    <div className="header-div">
      <Container maxWidth="xl" style={{ height: "10vh" }}>
        <Grid container>
          <Grid item lg={9} xs={5} style={{ marginTop: "15px" }}>
            <h2>Player</h2>
          </Grid>
          <Grid
            item
            lg={2}
            xs={6}
            style={{ textAlign: "center", marginTop: "15px" }}
          >
            <Link variant="contained" to="/" size="small" className="btn-link">
              Home
            </Link>
            <Link
              variant="contained"
              to="/albums"
              size="small"
              className="btn-link"
            >
              Albums
            </Link>
          </Grid>

          <Grid
            item
            lg={1}
            xs={1}
            style={{ textAlign: "center", marginTop: "14px" }}
          >
            <Link to="/profile">
              <AccountCircle className="profile-icon" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Navbar;
