import * as actionTypes from "./fetchActionTypes";

export const getUsersInit = () => {
  return {
    type: actionTypes.GET_USERS_INIT,
  };
};

export const getUsersSuccess = (payload) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload,
  };
};

export const getUsersFail = () => {
  return {
    type: actionTypes.GET_USERS_FAIL,
  };
};
