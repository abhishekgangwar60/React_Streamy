import {
  createStream,
  fetchAllStreams,
  fetchSingleStream,
  editStream,
  deleteStream
} from "../services/streams";
import * as actionTypes from "./actionTypes/index";
import history from "./../history";

export const createStreamAction = payload => async (dispatch, getState) => {
  let { userId } = getState().auth;
  payload = {
    ...payload,
    userId
  };
  let streamResponse = await createStream(payload);
  dispatch({
    type: actionTypes.CREATE_STREAM,
    payload: streamResponse.data
  });
  history.push("/");
};

export const fetchAllStreamsAction = payload => async dispatch => {
  let streamResponse = await fetchAllStreams(payload);
  dispatch({
    type: actionTypes.FETCH_ALL_STREAMS,
    payload: streamResponse.data
  });
};

export const fetchSingleStreamAction = payload => async dispatch => {
  let streamResponse = await fetchSingleStream(payload);
  dispatch({
    type: actionTypes.FETCH_SINGLE_STREAM,
    payload: streamResponse.data
  });
};

export const editStreamAction = payload => async dispatch => {
  let streamResponse = await editStream(payload);
  dispatch({ type: actionTypes.EDIT_STREAM, payload: streamResponse.data });
  history.push("/");
};

export const deleteStreamAction = payload => async dispatch => {
  let streamResponse = await deleteStream(payload);
  dispatch({
    type: actionTypes.DELETE_STREAM,
    payload: streamResponse.data
  });
};
