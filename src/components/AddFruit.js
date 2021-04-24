import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFruit } from "..actions/fruits";

const AddFruit = () => {
  const initialFruitState = {
    id: null,
    fruitName: "",
    fruitColor: "",
    fruitShape: "",
    inStock: false,
  };

  const [fruit, setFruit] = useState(initialFruitState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFruit({ ...fruit, [name]: value });
  };

  const saveFruit = () => {
    const { fruitName, fruitColor, fruitShape } = fruit;
    dispatch(createFruit(fruitName, fruitColor, fruitShape))
      .then((data) => {
        setFruit({
          id: data.id,
          fruitName: data.fruitName,
          fruitColor: data.fruitColor,
          fruitShape: data.fruitShape,
          inStock: false,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  const newFruit = () => {
    setFruit(initialFruitState);
    setSubmitted(false);
  };

  return (
    <div className="container-inner">
      {submitted ? (
        <div>
          <h4>You Submitted Successfully!</h4>
          <button onClick={newFruit}>Add A Fruit</button>
        </div>
      ) : (
        <form className="h-form">
          <label className="h-label">Name</label>
          <input
            className="h-input"
            type="text"
            id="fruitName"
            value={fruit.fruitName}
            onChange={handleInputChange}
            name="fruitName"
          />
          <label className="h-label">Color</label>
          <input
            className="h-input"
            type="text"
            id="fruitColor"
            value={fruit.fruitColor}
            onChange={handleInputChange}
            name="fruitColor"
          />
          <label className="h-label">Shape</label>
          <input
            className="h-input"
            type="text"
            id="fruitShape"
            value={fruit.fruitShape}
            onChange={handleInputChange}
            name="fruitShape"
          />
          <button onClick={saveFruit}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddFruit;
