import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, isLogged, ...rest }) => {
  return (
    <div>
      <Route
        path={path}
        {...rest}
        render={(props) => {
          if (isLogged === true) return <Component {...props} {...rest} />;
          else return <Redirect to="/login" />;
        }}
      />
    </div>
  );
};

//redux
const mapStateToProps = (state) => {
  return {
    isLogged: state.usersReducer.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
