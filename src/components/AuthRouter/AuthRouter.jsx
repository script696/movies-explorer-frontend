import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
import Layout from "../Layout/Layout";

const AuthRouter = ({
  component: Component,
  layout: Layout,
  protect = false,
  isLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLogin && protect) {
          return (
            <Redirect
              to={{
                pathname: PUBLIC_ROUTES.SIGNUP.path,
              }}
            />
          );
        }

        return Layout ? (
          <Layout isAuth={isLogin}>
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
