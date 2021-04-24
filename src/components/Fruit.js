import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFruit, deleteFruit } from "../actions/fruits";
import FruitDataService from "../services/FruitsService";

const Fruit = (props) => {
  const initialFruitState = {
    id: null,
    fruitName: "",
    fruitColor: "",
    fruitShape: "",
    inStock: false,
  };
  const [currentFruit, setCurrentFruit] = useState(initialFruitState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getFruit = (id) => {
    FruitDataService.get(id)
      .then((response) => {
        setCurrentFruit(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getFruit(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentFruit({ ...currentFruit, [name]: value });
  };

  const updateStatus = (status) => {
    const data = {
      id: currentFruit.id,
      fruitName: currentFruit.fruitName,
      fruitColor: currentFruit.fruitColor,
      fruitShape: currentFruit.fruitShape,
      inStock: status,
    };
    dispatch(updateFruit(currentFruit.id, data))
      .then((response) => {
        console.log(response);
        setCurrentFruit({ ...currentFruit, inStock: status });
        setMessage("Fruit updated successfully.");
      })
      .catch((e) => console.log(e));
  };

  const updateContent = () => {
    dispatch(updateFruit(currentFruit.id, currentFruit))
      .then((response) => {
        console.log(response);
        setMessage("Fruit Updated Successfully.");
      })
      .catch((e) => console.log(e));
  };

  const removeFruit = () => {
    dispatch(deleteFruit(currentFruit.id))
      .then(() => {
        props.history.push("fruits");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container-inner">
      {currentFruit ? (
        <div>
          <form className="h-form">
            <label className="h-label">Fruit Name</label>
            <input
              type="text"
              id="fruitName"
              name="fruitName"
              value={currentFruit.fruitName}
              onChange={handleInputChange}
            />
            <label className="h-label">Fruit Color</label>
            <input
              type="text"
              id="fruitColor"
              name="fruitColor"
              value={currentFruit.fruitColor}
              onChange={handleInputChange}
            />
            <label className="h-label">Fruit Shape</label>
            <input
              type="text"
              id="fruitShape"
              name="fruitShape"
              value={currentFruit.fruitShape}
              onChange={handleInputChange}
            />
          </form>
          <button onClick={() => updateStatus(!currentFruit.inStock)}>
            Toggle In Stock
          </button>
          <button onClick={updateContent}>Update</button>
          <button onClick={removeFruit}>Delete</button>
        </div>
      ) : (
        <div>
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
};

export default Fruit;
