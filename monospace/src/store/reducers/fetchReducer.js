import * as fetchActionTypes from "../actions/fetchActionTypes";
import updateObject from "../../utils/updateObject";

const initialState = {
  isLoading: false,
  users: [],
};

const getUsersInit = (state) => {
  const newState = { ...state };
  newState.isLoading = true;

  return updateObject(state, newState);
};

const getUsersSuccess = (state, payload) => {
  const newState = { ...state };
  newState.isLoading = false;
  newState.users = payload;

  return updateObject(state, newState);
};

const getUsersFail = (state) => {
  const newState = { ...state };
  newState.isLoading = false;
  newState.users = [];

  return updateObject(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.GET_USERS_INIT:
      return getUsersInit(state);
    case fetchActionTypes.GET_USERS_SUCCESS:
      return getUsersSuccess(state, action.payload);
    case fetchActionTypes.GET_USERS_FAIL:
      return getUsersFail(state);
    default:
      return state;
  }
};

export default reducer;
