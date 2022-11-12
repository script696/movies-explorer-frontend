import { Layout } from "./components";
import { Route, Switch } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { PageNotFound } from "./pages";

const App = () => {
  return (
    <Switch>
      {authProtectedRoutes.map(({ id, path, component }) => (
        <ProtectedRoute key={id} path={path} component={component} exact />
      ))}
      {publicRoutes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  );
};
export default App;
