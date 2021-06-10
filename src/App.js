import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import Page002 from "./pages/Page002";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/ShoppingPage"} component={ShoppingPage} />
        <Route exact path={"/page002"} component={Page002} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
