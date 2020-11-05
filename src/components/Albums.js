import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./Albums.css";
import axios from "../config/axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://rallycoding.herokuapp.com/api/music_albums"
        );
        setAlbums(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Typography className="album-title" variant="h3">
          ALBUMS
        </Typography>
        {albums ? (
          <Grid
            className="container"
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {albums.map((album) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Paper
                  //   spacing="6"
                  elevation={0}
                  style={{
                    background:
                      "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
                    margin: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Cards album={album} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </div>
    </div>
  );
}

export default Albums;
