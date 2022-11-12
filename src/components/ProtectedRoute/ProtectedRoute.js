import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
import { Layout } from "../index";
const isAuthMock = true;

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthMock) {
        return (
          <Redirect
            to={{
              pathname: PUBLIC_ROUTES.SIGNUP.path,
            }}
          />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default ProtectedRoute;
