import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Typography, CssBaseline } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <h1>Home</h1>
          <CssBaseline />
          <Container fixed>
            <Typography
              component="div"
              style={{ backgroundColor: "#cfe8fc", height: "60vh" }}
            />
          </Container>
        </div>
      </div>
    );
  }
}
//redux
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
