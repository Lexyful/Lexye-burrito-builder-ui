import React, { useState, useCallback } from 'react';

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];

  const handleIngredientChange = useCallback(e => {
    e.preventDefault()
    const ingredient = e.target.name;
    if (ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => prevIngredients.filter(i => i !== ingredient));
    } else {
      setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }
  
  }, [ingredients]);

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const clearInputs = useCallback(() => {
    setName('');
    setIngredients([]);
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    addOrder({ name, ingredients });
    clearInputs();
  }, [addOrder, clearInputs, name, ingredients]);

  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={handleIngredientChange}>
        {ingredient}
      </button>
    )
  });

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={handleNameChange}
      />

      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={handleSubmit}>
        Submit Order
      </button>
    </form>
  )
}

export default OrderForm;

