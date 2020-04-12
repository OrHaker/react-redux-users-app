import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux"; //redux part - Get the common state for the app
//components
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Users from "./Containers/Users";
import User from "./Containers/User";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Containers/PrivateRoute";
//actions
import { changeSiteName } from "./Actions/sitesActions";
import { logoutAction } from "./Actions/usersActions";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar
            siteName={this.props.siteName}
            logout={this.props.logout}
            isLogged={this.props.isLogged}
          />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />

            <PrivateRoute path="/users/:pageNumber?" component={Users} />
            <PrivateRoute path="/user/:userId" component={User} />
          </div>
        </Router>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    siteName: state.sitesReducer.siteName,
    isLogged: state.usersReducer.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSiteName(newSiteName) {
      dispatch(changeSiteName(newSiteName));
    },
    logout() {
      dispatch(logoutAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
