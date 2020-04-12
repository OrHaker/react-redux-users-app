import React, { Component } from "react";
import { connect } from "react-redux";
import MediaCard from "../Components/MediaCard";

import { getUserAction } from "../Actions/usersActions";

class User extends Component {
  UNSAFE_componentWillMount() {
    this.props.getUser(this.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.userId) {
      this.props.getUser(this.userId);
    }
  }
  get userId() {
    return this.props.match.params.userId;
  }
  render() {
    return (
      <div className="user-page">
        <h1>{this.props.userActive.first_name}</h1>
        <MediaCard
          src={this.props.userActive.avatar}
          firstName={this.props.userActive.first_name}
          lastName={this.props.userActive.last_name}
          email={this.props.userActive.email}
          history={this.props.history}
        />
      </div>
    );
  }
}

//redux
const mapStateToProps = (state) => {
  return {
    userActive: state.usersReducer.userActive,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser(userId) {
      dispatch(getUserAction(userId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
