import {
  CREATE_FRUIT,
  RETRIEVE_FRUITS,
  UPDATE_FRUIT,
  DELETE_FRUIT,
  DELETE_ALL_FRUITS,
} from "../actions/types";

const initialState = [];

function fruitReducer(fruits = initialState, action) {
  console.log("fruitReducer...", initialState, action);
  const [type, payload] = action;
  switch (type) {
    case CREATE_FRUIT:
      return [...fruits, payload];
    case RETRIEVE_FRUITS:
      return payload;
    case UPDATE_FRUIT:
      return fruits.map((fruit) => {
        if (fruit.id === payload.id) {
          return { ...fruit, ...payload };
        } else {
          return fruit;
        }
      });
    case DELETE_FRUIT:
      return fruits.filter(({ id }) => id !== payload.id);
    case DELETE_ALL_FRUITS:
      return [];
    default:
      return fruits;
  }
}

export default fruitReducer;
