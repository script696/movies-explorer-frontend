import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
import Layout from "../Layout/Layout";
import { useUserContext } from "../../hooks/useUserContext";
import { useLayoutEffect } from "react";
import { Modal } from "../index";
import { useErrorHandler } from "../../hooks";

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
