import { loginStart, loginFailure } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
  } catch (err) {
    dispatch(loginFailure);
  }
};
