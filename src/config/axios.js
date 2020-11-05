import axios from "axios";

const instance = axios.create({
  baseURL: "https://rallycoding.herokuapp.com/api/music_albums",
});

export default instance;
