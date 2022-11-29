import { Layout } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import { PageNotFound } from "./pages";
import { useEffect, useState } from "react";
import mainApi from "./utils/MainApi";
import { useUserContext } from "./hooks/useUserContext";

const App = () => {
  const { isLoggedIn, checkAuth } = useUserContext();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Switch>
      {authProtectedRoutes.map(({ id, path, component, layout }) => (
        <AuthRouter
          isLogin={isLoggedIn}
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
          isLogin={isLoggedIn}
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
