import { Redirect, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../utils/navigationRoutes";
const isAuthMock = false;

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

      return <Component {...props} />;
    }}
  />
);

export default ProtectedRoute;
