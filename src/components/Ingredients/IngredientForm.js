import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo(props => {
  const [inputTittleState, changeOnTittle] = useState("");

  const [inputAmountState, changeOnAmount] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({
      tittle: inputTittleState,
      amount: inputAmountState
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputTittleState}
              onChange={event => changeOnTittle(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputAmountState}
              onChange={event => changeOnAmount(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
