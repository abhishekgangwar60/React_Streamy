import * as actionTypes from "./../actions/actionTypes";

export const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case actionTypes.FETCH_SINGLE_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case actionTypes.EDIT_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case actionTypes.FETCH_ALL_STREAMS: {
      let streams = {};
      action.payload.map(stream => {
        streams = { ...streams, [stream.id]: stream };
      });
      return {
        ...state,
        ...streams
      };
    }

    case actionTypes.DELETE_STREAM: {
      return {
        ...state,
        [action.payload.id]: undefined
      };
    }
    default:
      return state;
  }
};
