import { combineReducers } from "redux";
import cartReducers from "../reducers/cartReducers";

const rootReducer = combineReducers({
  cart: cartReducers,
});

export default rootReducer;
