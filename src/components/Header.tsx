import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Header() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const location = useLocation();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className="App-header">
      <div className="header-top">
        <div className="header-info">
          <div className="header-info__location fa-solid fa-location-dot">
            <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
            <p>(Рынок Восточный)</p>
          </div>
          <div className="header-info__email fa-regular fa-envelope">
            <span>opt.sultan@mail.ru</span>
            <p>На связи в любое время</p>
          </div>
        </div>
        <ul className="header-list">
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="header__main">
        <div className="logo">
          <Link to="/">
            <img src="./pages/sultanB.png" alt="" />
          </Link>
        </div>
        <button className="catalog-btn btn">
          Каталог
          <img src="pages/icons/Frame 125.png" alt="" />
        </button>
        <div className="search-box">
          <input placeholder="Поиск..." type="text" className="search" />
          <div className="search-img">
            <img src="pages/icons/Vector (2).png" alt="" />
          </div>
        </div>

        <div className="info">
          <div className="info_wrap">
            <a href="77774900091" className="info__number">
              +7 (777) 490-00-91
            </a>
            <p className="info__time">время работы: 9:00-20:00</p>
            <a href="/" className="info__order-link">
              Заказать звонок
            </a>
          </div>
          <img src="./pages/Group 100.png" alt="" className="info__picture" />
        </div>
        <button className="price btn">
          Прайс-лист
          <img src="pages/icons/Vector (1).png" alt="" />
        </button>
        {location.pathname !== '/cart' && (<Link to="/cart" className="cart-link">
          <img src="pages/icons/Vector.png" alt="" />
          <div className="item-length">{totalCount}</div>
          <div className="cart-link__price">
            <p>Корзина</p>
            <span>{totalPrice} ₸ </span>
          </div>
        </Link>)}
      </div>
    </header>
  );
}

export default Header;
