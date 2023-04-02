import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";


type CartItemProps = {
  id: string,
  name: string,
  price: number,
  count: number,
  imageUrl: string,
  volume: string,
  description: string,
}

 const CartItemBlock: React.FC<CartItemProps> = ({ id, name, price, count, imageUrl, volume, description }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <p>{volume}г</p>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="cart__item-count">
        
        <button disabled={count === 1} onClick={onClickMinus} className="cart__item-count-minus">
          -
        </button>
        <b>{count}</b>
        <button onClick={onClickPlus} className="cart__item-count-plus">
          +
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₸</b>
      </div>
      <div className="cart__item-remove">
        <button onClick={onClickRemove} className="button button--outline button--circle">
          <img src="/pages/icons/Remove.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItemBlock
