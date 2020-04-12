import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AlertboxModal from "../Components/AlertModal";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "", password: "" },
      validate: { email: true, password: true },
      missingFields: false,
    };
  }

  //update user details
  changeUser = (property, value) => {
    const user = this.state.user;
    const validate = this.state.validate;
    user[property] = value;
    //validate inputs data
    if (property === "email")
      validate.email = RegExp(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      ).test(value);
    else
      validate.password = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/).test(
        value
      );
    this.setState({ user, validate });
  };

  //render alert box
  alertBox = (type) => {
    switch (type) {
      case "email":
        return (
          <div
            className="alert alert-danger mt-3"
            role="alert"
            style={{ width: "50%" }}
          >
            Invalid Email <br /> Sample template Example@Example.com
          </div>
        );
      case "password":
        return (
          <div
            className="alert alert-danger mt-3"
            role="alert"
            style={{ width: "50%" }}
          >
            Invalid Password, <br /> must contain at least one number, one
            lowercase and one uppercase letter at least six characters.
          </div>
        );
      default:
        break;
    }
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    if (this.state.user.email === "" || this.state.user.password === "") {
      this.setState({ missingFields: true });
      return;
    }
    this.props.handlerLogin(this.state.user.email, this.state.user.password);
  };

  //turn off Modal
  turnOff = () => {
    this.setState({ missingFields: false });
  };
  render() {
    return (
      <>
        <form className="login-form" onSubmit={this.handlerSubmit}>
          <div className="form-group">
            <TextField
              id="standard-basic"
              label="Email"
              onChange={(e) => this.changeUser("email", e.target.value)}
              value={this.state.user.email}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ width: "50%" }}
            />
            {/* alertBox */}
            {!this.state.validate.email && this.alertBox("email")}
          </div>
          <div className="form-group">
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => this.changeUser("password", e.target.value)}
              value={this.state.user.password}
              placeholder="Password"
              className="form-control"
              style={{ width: "50%" }}
            />
            {/* alertBox */}
            {!this.state.validate.password && this.alertBox("password")}
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Login
          </Button>
        </form>
        {this.state.missingFields && <AlertboxModal turnOff={this.turnOff} />}
      </>
    );
  }
}
