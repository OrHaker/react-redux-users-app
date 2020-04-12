import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tab,
  Grid,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

function Navbar(props) {
  const handlerLogOut = () => {
    props.logout();
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      width: "250px",
    },
    toolbarButtons: {
      position: "relative",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "rgba(100, 100, 100, 0.250)",
      },
    },
    toolbarButtonLogin: {
      marginLeft: "65%",
      position: "relative",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "rgba(100, 100, 100, 0.250)",
      },
    },
    toolbarButtonLogout: {
      color: "rgba(255, 71, 71, 0.521)",
      position: "relative",
      marginLeft: "65%",
      fontSize: 20,
      "&:hover": {
        color: "rgba(255, 0, 0, 0.750)",
        backgroundColor: "rgba(100, 100, 100, 0.250)",
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        style={{ background: "#2E3B55", marginBottom: 30 }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.siteName}
          </Typography>
          <Button
            color="inherit"
            component={Link}
            exact={true}
            to="/"
            className={classes.toolbarButtons}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/users/"
            className={classes.toolbarButtons}
          >
            Users
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/user/1"
            className={classes.toolbarButtons}
          >
            User
          </Button>
          {!props.isLogged && (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              className={classes.toolbarButtonLogin}
            >
              Login
            </Button>
          )}
          {props.isLogged && (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              onClick={handlerLogOut}
              className={classes.toolbarButtonLogout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <Link exact="true" to="/" className="navbar-brand">
          {props.siteName}
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink exact={true} to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users/" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/user/1" className="nav-link">
              User
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </div>
          {
            // this part will appear in the right side of the navbar only when user is logged in}
          }
          <div className="ml-auto">
            {props.isLogged && (
              <Link
                exact="true"
                to="/login"
                className="navbar-brand my-2 my-lg-0"
                onClick={handlerLogOut}
              >
                Log out
              </Link>
            )}
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default withRouter(Navbar);
