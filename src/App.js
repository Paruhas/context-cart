import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const ShoppingPage = () => {
  return (
    <div>
      <h1>THIS IS ShoppingPage</h1>
    </div>
  );
};

const page002 = () => {
  return (
    <div>
      <h1>THIS IS PAGE002</h1>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/ShoppingPage"} component={ShoppingPage} />
        <Route exact path={"/page002"} component={page002} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
