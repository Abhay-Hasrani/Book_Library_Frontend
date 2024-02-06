import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BookUrls from "../utils/BookUrl";

const initialState = {
  requests: [],
};

const RequestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    replaceRequests: (state, action) => {
      state.requests = action.payload.requests;
    },
    addRequest: (state, action) => {
        state.requests = [...state.requests, action.payload.request];
    },
  },
});

// Async action creators Reduxx thunk

/**
 * Fetches all requests and add to redux state
 * */
export const getAllRequests = () => async (dispatch) => {
  const res = await axios.get(BookUrls.REQUESTS_URL);
  console.log(res.data)
  // dispatch(requestsActions.replaceRequests({ requests: res.data }));
};

/**
 * Add request to the backend->database and add to redux state
 * */
export const postRequest = (request) => async (dispatch) => {
  const res = await axios.post(BookUrls.POST_BOOK_URL, request);
  dispatch(requestsActions.addRequest({ request: res.data.request }));
};

export const requestsActions = RequestsSlice.actions;

export default RequestsSlice.reducer;
