import React from "react";
import uniqid from "uniqid";

const ShoppingCart = ({ cart, amountInCart, setAmountInCart }) => {
  const handleChangeQuantity = (input, e) => {
    input.preventDefault();
    e.quantity = input.target.value;
    let newAmount = 0;
    cart.forEach((product) => (newAmount += parseInt(product.quantity)));
    setAmountInCart(newAmount);
  };
  return (
    <div>
      <p>total = {amountInCart}</p>
      <ul>
        {cart.map((element) => {
          return (
            <li key={uniqid()}>
              <p>{element.product.name}</p>
              <p>{element.size}</p>
              <input
                type="number"
                defaultValue={element.quantity}
                onChange={(input) => handleChangeQuantity(input, element)}
              ></input>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
