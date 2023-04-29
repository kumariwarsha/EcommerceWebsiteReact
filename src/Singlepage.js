import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./Api";
import Navbar from "./Navbar";
import { ShopContext } from "./context/shop-context";
const Singlepage = () => {
  const { id } = useParams();
  const { cartitems, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log(id);
  function Alertbox() {
    alert("Your item has been successfully added to cart.");
  }
  return (
    <>
      <Navbar />
      <div className="prod-container">
        <div className="prod-image">
          <img src={Api[id - 1].image} />
        </div>
        <div className="right-container">
          <h1 className="modelName">{Api[id - 1].modelName}</h1>
          <div className="os">{Api[id - 1].os}</div>
          <div className="display">{Api[id - 1].display}</div>

          <div className="power">{Api[id - 1].power}</div>
          <div className="processor">{Api[id - 1].processor}</div>
          <div className="memory">{Api[id - 1].memory}</div>

          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to products
          </button>
          <button
            onClick={() => {
              addToCart(id);
              Alertbox();
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              navigate("/Add");
            }}
          >
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Singlepage;
