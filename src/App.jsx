import { Layout } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import { useUserContext } from "./hooks/useUserContext";
import { useEffect, useLayoutEffect } from "react";
import { useMoviesContext } from "./hooks/useMoviesContext";

const App = () => {
  const { isLogin } = useUserContext();
  const { getSavesMovies } = useMoviesContext();

  useEffect(() => {
    getSavesMovies();
  }, [isLogin]);

  return (
    <Switch>
      {authProtectedRoutes.map(({ id, path, component, layout }) => (
        <AuthRouter
          key={id}
          path={path}
          component={component}
          layout={layout}
          protect
          exact
        />
      ))}
      {publicRoutes.map(({ id, path, component, layout }) => (
        <AuthRouter
          key={id}
          path={path}
          component={component}
          layout={layout}
          exact
        />
      ))}
    </Switch>
  );
};
export default App;
