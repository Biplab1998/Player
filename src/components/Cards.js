import React from "react";
import "./Cards.css";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";

function Cards(props) {
  return (
    <div>
      <div class="card">
        <img
          //   key={album.title}
          src={props.album.image}
        />
        <div class="info">
          <h1>{props.album.title}</h1>
          <p>
            Lorem Ipsum is simply dummy text from the printing and typeseting
            industry
          </p>
          <Button className="play" size="small">
            Play
            <PlayArrow fontSize="small" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
