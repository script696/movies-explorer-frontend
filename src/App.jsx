import { Layout } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import { PageNotFound } from "./pages";
// import { useEffect, useLayotEffect, useState } from "react";
import mainApi from "./utils/MainApi";
import { useUserContext } from "./hooks/useUserContext";
import { useLayoutEffect } from "react";

const App = () => {
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
