//list of actions Used for uplifting data to main store
//login
export const loginAction = (email, password) => {
  return async (dispatch) => {
    //req variables
    const reqBody = { email, password };

    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    };

    //fetch data from api
    fetch("https://reqres.in/api/login", req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const isLogged = typeof data.token !== "undefined" && data.token !== "";
        // if (data.token) console.log("data.token", data.token);
        // else console.log("data", data);
        return dispatch({
          type: "LOGIN",
          payload: isLogged,
        });
      });
  };
};

//logout
export const logoutAction = () => {
  return {
    type: "LOGIN",
    payload: false,
  };
};

//get users data
export const getUsersAction = (pageNumber) => {
  return async (dispatch) => {
    //fetch data from api
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch({
          type: "SET_USERS",
          payload: data,
        });
      });
  };
};

//get users data
export const getUserAction = (userId) => {
  return async (dispatch) => {
    //fetch data from api
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch({
          type: "SET_USER_ACTIVE",
          payload: data.data,
        });
      });
  };
};
