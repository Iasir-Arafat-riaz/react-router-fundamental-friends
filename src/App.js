import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from "./Component/NoMatch/NoMatch"

import Welcome from './Component/Welcome/Welcome';
import FriendDetail from './Component/FriendDetail/FriendDetail';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/wel">
            <Welcome></Welcome>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
