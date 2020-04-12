//default state
const initState = {
  isLogged: JSON.parse(localStorage.getItem("isLogged")),
  users: {
    page: null,
    per_page: null,
    total: null,
    total_pages: null,
    data: [],
  },
  userActive: {
    id: 2,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null,
  },
};
//reducer
const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogged", action.payload);
      state = { ...state, isLogged: action.payload };
      break;
    case "SET_USERS":
      state = { ...state, users: action.payload };
      break;
    case "SET_USER_ACTIVE":
      state = { ...state, userActive: action.payload };
      break;
    default:
      break;
  }
  // console.log("usersReducerState", state);
  return state;
};
export default usersReducer;
