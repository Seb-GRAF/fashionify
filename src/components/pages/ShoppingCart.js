import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import "../../styles/ShoppingCart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ShoppingCart = ({
  cart,
  setCart,
  amountInCart,
  setAmountInCart,
  totalPrice,
}) => {
  const handleIncreaseQuantity = (e) => {
    e.quantity += 1;
    setAmountInCart(amountInCart + 1);
  };
  const handleDecreaseQuantity = (e) => {
    if (e.quantity === 0) return;
    e.quantity -= 1;
    setAmountInCart(amountInCart - 1);
  };

  const handleDelete = (item) => {
    setAmountInCart(amountInCart - item.quantity);
    let newCart = cart.filter((e) => e !== item);
    handleCartChange(newCart);
  };

  const handleCartChange = useCallback((newCart) => setCart(newCart));

  return (
    <div className="shopping-cart">
      {amountInCart < 1 && (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Fill it up with our collection!</p>
          <Link to="/shop">Shop</Link>
        </div>
      )}
      {amountInCart > 0 && (
        <ul>
          <h1>My cart ({amountInCart} items)</h1>
          {cart.map((element) => {
            if (element.quantity === 0) return handleDelete(element);
            return (
              <li key={uniqid()}>
                <Link to={`/shop/${element.product.name.replace(/\s/g, "-")}`}>
                  <img src={element.product.image} alt="product-image" />
                </Link>
                <div className="description">
                  <Link
                    to={`/shop/${element.product.name.replace(/\s/g, "-")}`}
                  >
                    <p className="name">{element.product.name}</p>
                  </Link>
                  <p className="size">{element.size}</p>
                  <div
                    className="delete"
                    onClick={() => {
                      handleDelete(element);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                    <p>Remove</p>
                  </div>
                </div>
                <div className="add-and-remove">
                  <button onClick={() => handleDecreaseQuantity(element)}>
                    −
                  </button>
                  <p>{element.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(element)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
          <div className="total-price">
            <h3>Total</h3>

            <div className="sub-total">
              <p>Sub-total</p>
              <div>{totalPrice.toFixed(2)}</div>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <div>FREE</div>
            </div>
            <div className="total">
              <p>Total (VAT incl.)</p>
              <div>CHF {totalPrice.toFixed(2)}</div>
            </div>
            <Link to="/404">ORDER</Link>
          </div>
          <div className="payment-method">
            <h3>We accept</h3>
            <div className="icons">
              <img
                src={require("../../assets/credit-card-logos.png")}
                alt="credit cards"
              />
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
