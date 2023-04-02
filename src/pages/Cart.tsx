import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartEmpty from "../components/CartEmpty";
import { RootState } from "../redux/store";
import { clearItems } from "../redux/cart/slice";
import CartItem from "../components/CartItem";
import CartItemBlock from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  const onClickClear = () => {
    alert('СПАСИБО ЗА ЗАКАЗ')
    dispatch(clearItems())
  }

 

  return (
    
    <div className="container container--cart">
      <Link className="main-link" to='/'>Каталог</Link>
      <Link className="main-link" to='/cart'>Корзина</Link>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Корзина</h2>
        </div>
        <div className="content__items">
          {items.map((item: any) => (
            <CartItemBlock key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-buttons">
            <div onClick={onClickClear} className="btn pay-btn">
              <span>Оформить сейчас</span>
            </div>
          </div>
          <div className="cart__bottom-details">
            <span>{totalPrice} ₸</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
