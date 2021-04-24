import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  retrieveFruit,
  findFruitByName,
  deleteAllFruits,
} from "../actions/fruits";

const FruitsList = () => {
  const [currentFruit, setCurrentFruit] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchFruitName, setSearchFruitName] = useState("");
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveFruit);
  });

  const onChangeSearchFruitName = (e) => {
    const searchFruitName = e.target.value;
    setSearchFruitName(searchFruitName);
  };

  const refreshData = () => {
    setCurrentFruit(null);
    setCurrentIndex(-1);
  };

  const setActiveFruit = (fruit, index) => {
    setCurrentFruit(fruit);
    setCurrentIndex(index);
  };

  const removeAllFruits = () => {
    dispatch(deleteAllFruits())
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => console.log(e));
  };

  const findByName = () => {
    refreshData();
    dispatch(findFruitByName(searchFruitName));
  };

  return (
    <div className="container-inner">
      <div className="h-form">
        <input
          type="text"
          placeholder="Search By Name"
          value={searchFruitName}
          onChange={onChangeSearchFruitName}
        />
        <button onClick={findByName}>Search By Name</button>
      </div>
      <h2>FRUITS LIST</h2>
      <ul>
        {fruits &&
          fruits.map((fruit, index) => {
            <li onClick={setActiveFruit(fruit, index)} key={index}>
              {fruit.fruitName}
            </li>;
          })}
      </ul>
      <button onClick={removeAllFruits}>Remove All</button>
      <div>
        {currentFruit ? (
          <div>
            <h3>{currentFruit.fruitName}</h3>
            <h3>{currentFruit.fruitColor}</h3>
            <h3>{currentFruit.fruitShape}</h3>
            <h3>{currentFruit.inStock}</h3>
          </div>
        ) : (
          <div>
            <h3>Please Select A Fruit</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FruitsList;
