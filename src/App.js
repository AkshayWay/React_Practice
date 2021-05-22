import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Link,
  hashHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Vegetables from "./Components/vegetables";
import Flowers from "./Components/Flowers";

function App() {
  return (
    <div>
      <h1>React Application</h1>

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vegetables">Vegetables</Link>
          </li>
          <li>
            <Link to="/flowers">Flowers</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/vegetables" component={Vegetables}></Route>
        <Route path="/flowers" component={Flowers}></Route>
      </Router>
    </div>
  );
}

export default App;
