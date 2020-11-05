import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Albums from "./Albums";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/albums" component={Albums} />
        <Route path="/" component={Home} />
        {/* <Login /> */}
        {/* <Signup />
      <Albums />
      <Profile /> */}
      </Switch>
    </div>
  );
}

export default App;
