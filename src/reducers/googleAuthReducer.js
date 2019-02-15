import * as actionType from "./../actions/actionTypes";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export const googleAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SIGN_IN: {
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    }
    case actionType.SIGN_OUT: {
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    }

    default:
      return state;
  }
};
