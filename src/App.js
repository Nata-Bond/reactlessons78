import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Home from "./views/Home";
import Shows from "./views/Shows";
import ShowDetails from "./views/ShowDetails";
import NotFound from "./views/NotFound";
import routes from "./routes";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.shows} exact component={Shows} />
        <Route path={routes.showDetails} component={ShowDetails} />
        {/* <Redirect to="/" /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
