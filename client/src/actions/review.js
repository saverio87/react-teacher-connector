import {
  GET_REVIEWS,
  GET_REVIEW,
  REVIEW_ERROR,
  ADD_REVIEW,
  DELETE_REVIEW,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// Get reviews

export const getReviews = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/reviews/");

    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get review by id

export const getReviewById = (reviewId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reviews/${reviewId}`);

    dispatch({
      type: GET_REVIEW,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add review

export const addReview = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`/api/reviews/`, formData, config);

    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });

    dispatch(setAlert("Your review has been posted", "success"));
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
