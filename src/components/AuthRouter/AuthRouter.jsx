import { useLayoutEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";

const AuthRouter = ({
  component: Component,
  layout: Layout,
  protect = false,
  ...rest
}) => {
  const { isLoggedIn, checkAuth } = useUserContext();

  useLayoutEffect(() => {
    checkAuth();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("jwt") && protect) {
          return (
            <Redirect
              to={{
                pathname: PUBLIC_ROUTES.SIGNUP.path,
              }}
            />
          );
        }

        return Layout ? (
          <Layout isAuth={isLoggedIn}>
            <Component {...props} />
          </Layout>
        ) : (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default AuthRouter;
