import thunk from "redux-thunk";
import { taxReducer } from "../Reducer/tax.reducer";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");


const rootReducer=combineReducers({
      list:taxReducer
})
                                                                        
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))  // apply middleware Redux thunk  that return a function instead of an object