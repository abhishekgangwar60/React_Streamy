import streams from "./../api/streams";

export const createStream = async payload => {
  return await streams.post("/streams", payload);
};

export const fetchAllStreams = async () => {
  return await streams.get("/streams");
};

export const fetchSingleStream = async payload => {
  return await streams.get(`/streams/${payload}`);
};

export const editStream = async payload => {
  return await streams.patch(`/streams/${payload.id}`, payload.data);
};

export const deleteStream = async payload => {
  return await streams.delete(`/streams/${payload}`);
};
