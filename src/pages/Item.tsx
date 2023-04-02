import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { minusItem, addItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";

const Item: React.FC = () => {
  const [item, setItem] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
    volume: string;
    barcode: string;
    manufacturer: string;
    brend: string;
    description: string;
    count: number;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          "https:641f4719ad55ae01ccb9e4bd.mockapi.io/items/" + id
        );
        setItem(data);
      } catch (error) {
        alert("Ошибка");
      }
    }

    fetchItem();
  }, []);

  const dispatch = useDispatch();
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };



  if (!item) {
    return <>"загрузка..."</>;
  }

  return (
    <>
      <Link className="main-link" to='/'>Каталог</Link>
      <Link className="main-link" to=''>Косметика и гигиена</Link>
      <div className="item-full">

        <div className="item-full__img">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="item-full__info">
          <h2 className="item-full__title">{item.name}</h2>
          <p className="item-full__volume">{item.volume} г</p>
          <div className="item-full__add">
            <p className="item-full__price">{item.price} ₸</p>
            {/* <div className="cart__item-count">
            <button disabled={item.count === 1} onClick={onClickMinus} className="cart__item-count-minus">
              -
            </button>
            <div>{item.count}</div>
            <button onClick={onClickPlus} className="cart__item-count-plus">
              +
            </button>
          </div>
          <button onClick={onClickPlus} className="item__link btn">
            В КОРЗИНУ
            <img src="pages/icons/simple-line-icons_basket.png" alt="" />
          </button> */}
          </div>

          <div className="item-full__links">
            <img src="../pages/icons/Vector (3).png" alt="" />
            <p>
              При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
            </p>
            <div className="item-full__price-list">
              Прайс-лист
              <img src="../pages/icons/Vector (4).png" alt="" />
            </div>
          </div>
          <div className="item-full__data">
            <div className="item__badrcode">
              <p>Штрихкод: </p>
              <span>{item.barcode}</span>
            </div>
            <div className="item__manufacturer">
              <p>Производитель: </p>
              <span>{item.manufacturer}</span>
            </div>
            <div className="item__brend">
              <p>Бренд: </p>
              <span>{item.brend}</span>
            </div>
          </div>
          <div className="item-full__desc">
            <h4>Описание</h4>
            <p>{item.description}</p>
          </div>
          <div className="item-full__detail">
            <h4>Характеристики</h4>
            <div>
              <p>Назначение:</p>
              <span>BioMio</span>
            </div>
            <div>
              <p>Тип:</p>
              <span>BioMio</span>
            </div>
            <div>
              <p>Производитель:</p>
              <span>460404</span>
            </div>
            <div>
              <p>Бренд:</p>
              <span>4604049097548</span>
            </div>
            <div>
              <p>Артикул:</p>
              <span>4604049097548</span>
            </div>
            <div>
              <p>Штрихкод:</p>
              <span>4604049097548</span>
            </div>
            <div>
              <p>Вес:</p>
              <span>90 г</span>
            </div>
            <div>
              <p>Объем:</p>
              <span>90 г</span>
            </div>
            <div>
              <p>Кол-во в коробке:</p>
              <span>90 г</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
