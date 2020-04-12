import React, { Component } from "react";
import AlertboxModal from "../Components/AlertModal";

import { Visibility, VisibilityOff } from "@material-ui/icons/";
import { IconButton, InputAdornment, InputLabel } from "@material-ui/core/";
import { FormControl, Input, Button, TextField } from "@material-ui/core/";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "", password: "" },
      validate: { email: true, password: true },
      missingFields: false,
      showPassword: false,
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
          {/* Email input div*/}
          <div className="form-group">
            <TextField
              id="standard-basic"
              label="Email"
              onChange={(e) => this.changeUser("email", e.target.value)}
              value={this.state.user.email}
              type="email"
              className="form-control my-3"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ width: "50%" }}
            />
            {/* alertBox */}
            {!this.state.validate.email && this.alertBox("email")}
          </div>
          {/* Password input div*/}
          <div className="form-group">
            <FormControl style={{ width: "50%" }} className="my-3">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.user.password}
                onChange={(e) => this.changeUser("password", e.target.value)}
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      style={{ outline: "none" }}
                      aria-label="toggle password visibility"
                      onClick={() => {
                        this.setState({
                          showPassword: !this.state.showPassword,
                        });
                      }}
                    >
                      {!this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

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
