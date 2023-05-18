import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
export const signup = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/user/sign-up", user);

    return res.data;
  } catch (err) {}
};
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/user/sign-in", user);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/user/sign-up", user);
    return res.data;
  } catch (err) {}
};

export const addtodos = async (dispatch, todo) => {
  try {
    const res = await userRequest.post("/create", todo);
    return res.data;
  } catch (error) {}
};
export const gettodos = async (dispatch) => {
  try {
    const res = await userRequest.get("/getall");
    return res.data;
  } catch (error) {}
};
