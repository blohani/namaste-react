import React from "react";
import { FoodItems } from "./foods/FoodItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log("cartItems: ", cartItems);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length == 0 ? "Cart is empty. Add items to the cart..." : null}
      {cartItems?.map((item, index) => {
        return (
          <>
            <button
              className="m-2 p-2 bg-slate-500 text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <div key={index} className="m-2 p-2">
              <FoodItems item={item} />
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Cart;
