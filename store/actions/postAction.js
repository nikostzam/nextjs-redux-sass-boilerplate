import * as types from "../types";

export const fetchPosts = () => async (dispatch) => {
  /* const res = await axios.get(API)
    const data = await res.json() */
  dispatch({
    type: types.GET_POSTS,
    payload: ["1st post", "2nd post"],
    /* payload: data */
  });
};
