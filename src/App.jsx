import { Main } from "./pages";
import { Layout } from "./components";
import { Switch } from "react-router-dom";
import { authProtectedRoutes } from "./utils/navigationRoutes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Switch>
      <Layout>
        {authProtectedRoutes.map(({ id, path, component }) => (
          <ProtectedRoute key={id} path={path} component={component} exact />
        ))}
      </Layout>
    </Switch>
  );
};
export default App;
