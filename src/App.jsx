import { Layout } from "./components";
import { Route, Switch } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
      <Layout>
        {authProtectedRoutes.map(({ id, path, component }) => (
          <ProtectedRoute key={id} path={path} component={component} exact />
        ))}
      </Layout>
    </Switch>
  );
};
export default App;
