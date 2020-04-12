import { createStore, combineReducers, applyMiddleware } from "redux"; //func that create the store for us
import ReduxThunk from "redux-thunk";

import sitesReducer from "./Reducers/sitesReducer";
import usersReducer from "./Reducers/usersReducer";

//redux global store
const store = createStore(
  combineReducers({
    sitesReducer,
    usersReducer,
  }),
  {},
  applyMiddleware(ReduxThunk)
);

export default store;
