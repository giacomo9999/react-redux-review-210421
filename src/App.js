import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import FruitsList from "./components/FruitsList";
import AddFruit from "./components/AddFruit";
import Fruit from "./components/Fruit";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/fruits"}>Home</Link>
          </li>
          <li>
            <Link to={"/fruits"}>Fruits</Link>
          </li>
          <li>
            <Link to={"/add-fruit"}>Add Fruit</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={["/", "/fruits"]} component={FruitsList} />
        <Route path={["/add-fruit"]} component={AddFruit} />
        <Route path={["/fruits/:id"]} component={Fruit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
