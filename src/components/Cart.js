import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: "INCREMENT_ITEM", payload: item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: "DECREMENT_ITEM", payload: item });
  };
  const handleAddToCart = () => {
    // Sample item to add to the cart. Replace this with your logic to add items to the cart.
    const newItem = {
      id: 1,
      name: "Sample Item",
      quantity: 1,
    };
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddToCart}>Add Sample Item to Cart</button>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}{" "}
            <button onClick={() => handleIncrement(item)}> + Add </button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDecrement(item)}
            >
              - Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
