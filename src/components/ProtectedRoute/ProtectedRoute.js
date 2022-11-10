import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (false) {
        return (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default ProtectedRoute;
