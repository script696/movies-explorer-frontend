import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
import Layout from "../Layout/Layout";
import { useUserContext } from "../../hooks/useUserContext";
import { useLayoutEffect } from "react";

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
  console.log(isLoggedIn, protect);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("jwt") && protect) {
          console.log("redirect");
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
          <Component {...props} />
        );
      }}
    />
  );
};

export default AuthRouter;
