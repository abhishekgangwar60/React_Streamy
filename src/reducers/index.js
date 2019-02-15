import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { googleAuthReducer } from "./googleAuthReducer";
import { streamsReducer } from "./streams.reducer";

const reducer = combineReducers({
  auth: googleAuthReducer,
  form: formReducer,
  streams: streamsReducer
});

export default reducer;
