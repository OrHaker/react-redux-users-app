import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../Components/LoginForm";
import { loginAction } from "../Actions/usersActions";

class Login extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.isLogged === true) {
      this.props.history.push("/");
    }
  }

  handlerLogin = (email, password) => {
    this.props.login(email, password);
    setTimeout(() => {
      if (this.props.isLogged === true) this.props.history.push("/");
    }, 1500);
  };

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <LoginForm handlerLogin={this.handlerLogin} />
      </div>
    );
  }
}
//redux
const mapStateToProps = (state) => {
  return {
    isLogged: state.usersReducer.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(loginAction(email, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
