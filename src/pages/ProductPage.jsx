import { createContext, useContext, useState } from "react";
import "../styles/ProductPageStyles/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";

export const CartContext = createContext();

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  // const [quantity, setQuantity] = useState(1);
  const [image] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);
  const quantity = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  // const increase = () => {
  //   if (quantity >= 1) {
  //     setQuantity(quantity + 1);
  //   }
  // };

  // const decrease = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  {/* <button onClick={decrease}>-</button> */}
                  <button onClick={() => dispatch(decrease())}>-</button>
                  <p className="quantity">{quantity}</p>
                  {/* <button onClick={increase}>+</button> */}
                  <button onClick={() => dispatch(increase())}>+</button>
                </div>
                <p className="product-price">{calcPrice(quantity)}.00 ₹</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
