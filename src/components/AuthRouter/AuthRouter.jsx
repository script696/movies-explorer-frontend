import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
import Layout from "../Layout/Layout";
const isAuthMock = true;

const AuthRouter = ({
  component: Component,
  layout: Layout,
  protect = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthMock && protect) {
        return (
          <Redirect
            to={{
              pathname: PUBLIC_ROUTES.SIGNUP.path,
            }}
          />
        );
      }

      return Layout ? (
        <Layout isAuth={isAuthMock}>
          <Component {...props} />
        </Layout>
      ) : (
        <Component {...props} />
      );
    }}
  />
);

export default AuthRouter;
