//default state
const initState = {
  siteName: "Users Management",
};
//reducer
const sitesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_SITE_NAME":
      state = { ...state, siteName: action.payload };
      break;
    default:
      break;
  }
  return state;
};
export default sitesReducer;
