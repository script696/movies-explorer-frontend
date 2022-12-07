import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { Modal } from "./components";
import AuthRouter from "./components/AuthRouter/AuthRouter";
import { useMoviesContext, useUserContext } from "./hooks";
import { authProtectedRoutes, publicRoutes } from "./utils/navigationRoutes";

const App = () => {
  const { isLogin } = useUserContext();
  const { getSavesMovies } = useMoviesContext();

  useEffect(() => {
    if (!isLogin) return;
    getSavesMovies();
  }, [isLogin]);

  return (
    <>
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
            isLogin={isLogin}
            key={id}
            path={path}
            component={component}
            layout={layout}
            exact
          />
        ))}
      </Switch>
      <Modal />
    </>
  );
};
export default App;
