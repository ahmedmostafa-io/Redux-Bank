import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./Features/accounts/accountSlice";
import customerReducer from "./Features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
//?
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
