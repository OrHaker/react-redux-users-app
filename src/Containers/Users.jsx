import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../Actions/usersActions";
import MyTable from "../Components/MyTable";

class Users extends Component {
  UNSAFE_componentWillMount() {
    this.props.getUsers(this.pageNumber);
  }

  get pageNumber() {
    const isPagenumberExistInUrl =
      typeof this.props.match.params.pageNumber !== "undefined";
    return isPagenumberExistInUrl ? this.props.match.params.pageNumber : 1;
  }

  render() {
    const handlerChangePage = (num) => {
      if (this.props.users.page !== num) {
        this.props.history.push(`/users/${num}`);
        this.props.getUsers(num);
      }
    };
    const handlerClickUser = (userId) => {
      this.props.history.push(`/user/${userId}`);
    };
    //pages arr
    const pagesArr = [...Array(this.props.users.total_pages).keys()];
    return (
      <div className="users-page">
        <h1>Users</h1>
        <MyTable
          users={this.props.users.data}
          handlerClickUser={handlerClickUser}
          pagesArr={pagesArr}
          handlerChangePage={handlerChangePage}
          page={this.props.users.page}
        />
      </div>
    );
  }
}
//redux
const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers(pageNumber) {
      dispatch(getUsersAction(pageNumber));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
