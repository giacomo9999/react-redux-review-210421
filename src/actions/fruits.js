import {
  CREATE_FRUIT,
  RETRIEVE_FRUIT,
  UPDATE_FRUIT,
  DELETE_FRUIT,
  DELETE_ALL_FRUIT,
} from "./types";

import FruitDataService from "../services/FruitsService";

export const createFruit = (fruitName, fruitColor, fruitShape) => async (
  dispatch
) => {
  try {
    const res = await FruitDataService.create({
      fruitName,
      fruitColor,
      fruitShape,
    });
    dispatch({ type: CREATE_FRUIT, payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveFruit = () => async (dispatch) => {
  try {
    const res = await FruitDataService.getAll();
    dispatch({ type: RETRIEVE_FRUIT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateFruit = (id) => async (dispatch) => {
  try {
    const res = await FruitDataService.update(id, data);
    dispatch({ type: UPDATE_FRUIT, payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteFruit = (id) => async (dispatch) => {
  try {
    await FruitDataService.remove(id);
    dispatch({ type: DELETE_FRUIT, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllFruit = () => async (dispatch) => {
  try {
    const res = await FruitDataService.removeAll();
    dispatch({ type: DELETE_ALL_FRUIT, data: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findFruitByName = (fruitName) => async (dispatch) => {
  try {
    const res = await FruitDataService.findByName(fruitName);
    dispatch({ type: RETRIEVE_FRUIT, data: res.data });
  } catch (err) {
    console.log(err);
  }
};
