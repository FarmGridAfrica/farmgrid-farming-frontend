import {
  CLEAR_POST_CREATE_FARM_SUCCESS,
  GET_FARMS_FAIL,
  GET_FARMS_LOADING,
  GET_FARMS_REQUEST,
  GET_FARMS_SUCCESS,
  GET_FARM_FAIL,
  GET_FARM_LOADING,
  GET_FARM_REQUEST,
  GET_FARM_SUCCESS,
  POST_CREATE_FARM_FAIL,
  POST_CREATE_FARM_LOADING,
  POST_CREATE_FARM_REQUEST,
  POST_CREATE_FARM_SUCCESS,
} from "../types";

export const postCreateFarmRequest = (prop) => {
  return {
    type: POST_CREATE_FARM_REQUEST,
    payload: prop,
  };
};

export const postCreateFarmSuccess = (prop) => {
  return {
    type: POST_CREATE_FARM_SUCCESS,
    payload: prop,
  };
};

export const clearPostCreateFarmSuccess = (prop) => {
  return {
    type: CLEAR_POST_CREATE_FARM_SUCCESS,
    payload: prop,
  };
};

export const postCreateFarmFailure = (errors) => {
  return {
    type: POST_CREATE_FARM_FAIL,
    payload: { errors },
  };
};

export const postCreateFarmLoading = (loading) => {
  return {
    type: POST_CREATE_FARM_LOADING,
    payload: loading,
  };
};

export const getFarmsRequest = (prop) => {
  return {
    type: GET_FARMS_REQUEST,
    payload: prop,
  };
};

export const getFarmsSuccess = (prop) => {
  return {
    type: GET_FARMS_SUCCESS,
    payload: prop,
  };
};

export const getFarmsFailure = (errors) => {
  return {
    type: GET_FARMS_FAIL,
    payload: { errors },
  };
};

export const getFarmsLoading = (loading) => {
  return {
    type: GET_FARMS_LOADING,
    payload: loading,
  };
};

export const getFarmRequest = (prop) => {
  return {
    type: GET_FARM_REQUEST,
    payload: prop,
  };
};

export const getFarmSuccess = (prop) => {
  return {
    type: GET_FARM_SUCCESS,
    payload: prop,
  };
};

export const getFarmFailure = (errors) => {
  return {
    type: GET_FARM_FAIL,
    payload: { errors },
  };
};

export const getFarmLoading = (loading) => {
  return {
    type: GET_FARM_LOADING,
    payload: loading,
  };
};
