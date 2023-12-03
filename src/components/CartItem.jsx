import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/ProductPage";
import { IconX } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";

function CartItem() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const quantity = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className="cart-item">
          <div className="cart-img">
            <img src={item.img} alt="product" />
          </div>
          <div className="cart-middle">
            <p className="cart-name">{item.description}</p>
            <div className="cart-btns">
              <button onClick={() => dispatch(decrease())}>-</button>
              <p className="quantity">{quantity}</p>
              <button onClick={() => dispatch(increase())}>+</button>
            </div>
          </div>
          <div className="cart-right">
            <p className="cart-price">{calcPrice(quantity, item.price)}.00₹</p>
            <IconX onClick={() => removeFromCart(item.id)} />
          </div>
        </div>
      ))}
    </>
  );
 }

export default CartItem;
