import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";
import { RootState } from "../redux/store";



type ItemBlockProps = {
  id:string,
  imageUrl:string,
  name:string,
  volume:string,
  barcode:string,
  manufacturer:string,
  brend:string,
  price:number,
  description:string,
  count:number,
}

const ItemBlock: React.FC<ItemBlockProps> =({
  id,
  imageUrl,
  name,
  volume,
  barcode,
  manufacturer,
  brend,
  price,
  description,
  count,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id))
  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      volume,
      description,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="item">
      <img className="item__img" src={imageUrl} alt="" />
      <div className="item__volume">{volume} г</div>
      <Link to={`/item/${id}`}>
      <h3 className="item__title">{name}</h3>
      </Link>
      <div className="item__badrcode">
        <p>Штрихкод: </p>
        <span>{barcode}</span>
      </div>
      <div className="item__manufacturer">
        <p>Производитель: </p>
        <span>{manufacturer}</span>
      </div>
      <div className="item__brend">
        <p>Бренд: </p>
        <span>{brend}</span>
      </div>
      <div className="item__box">
        <div className="item__price">{price} ₸</div>
        <div onClick={onClickAdd} className="item__link btn">
          В КОРЗИНУ
          <img src="pages/icons/simple-line-icons_basket.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ItemBlock;
