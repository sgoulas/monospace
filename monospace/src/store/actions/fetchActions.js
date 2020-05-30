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

export const putUserInit = () => {
  return {
    type: actionTypes.PUT_USER_INIT,
  };
};

export const putUserSuccess = () => {
  return {
    type: actionTypes.PUT_USER_SUCCESS,
  };
};

export const putUserFail = () => {
  return {
    type: actionTypes.PUT_USER_FAIL,
  };
};

export const setUsers = (payload) => {
  return {
    type: actionTypes.SET_USERS,
    payload,
  };
};
