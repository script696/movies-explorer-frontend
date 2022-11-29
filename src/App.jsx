import { Layout } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import { PageNotFound } from "./pages";
import { useEffect, useState } from "react";
import mainApi from "./utils/MainApi";
import { useMainApiContext } from "./hooks/useMainApiContext";

const App = () => {
  const { isLoggedIn, checkAuth } = useMainApiContext();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

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
