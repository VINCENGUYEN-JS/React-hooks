import React, { useState, useEffect, useCallback } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   fetch("https://react-hooks-update-67ab9.firebaseio.com/ingredients.json")
  //     .then(res => res.json())
  //     .then(responseData => {
  //       const loadedIngredients = [];
  //       for (let key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           tittle: responseData[key].tittle,
  //           amount: responseData[key].amount
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, []);

  const filteredIngredientsHandlers = filterIngredients => {
    setIngredients(filterIngredients);
  };

  const addIngredientHandler = ingredient => {
    fetch("https://react-hooks-update-67ab9.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(responseData => {
        setIngredients(prevIngredient => [
          ...prevIngredient,
          { id: responseData.name, ...ingredient }
        ]);
      });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search
          onLoadIngredients={useCallback(filteredIngredientsHandlers, [])}
        />
        {/* Need to add list here! */}
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
