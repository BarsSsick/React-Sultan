function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-info">
            <div className="header-logo">
              <img src="./pages/sultanW.png" alt="" />
            </div>
            <p className="text">
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <p className="search-text">Подпишись на скидки и акции</p>
            <div className="search-box">
              <input
                placeholder="Введите ваш E-mail"
                type="text"
                className="email"
              />
              <div className="search-img">
                <img src="pages/icons/Vector (2).png" alt="" />
              </div>
            </div>
          </div>
          <div className="footer__lists">
            <ul className="menu">
              <div className="footer__title">Меню сайта:</div>
              <li>
                <a href="/" className="menu__item">
                  О компании
                </a>
              </li>
              <li>
                <a href="/" className="menu__item">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="/" className="menu__item">
                  Возврат
                </a>
              </li>
              <li>
                <a href="/" className="menu__item">
                  Контакты
                </a>
              </li>
            </ul>
            <ul className="categories">
              <div className="footer__title">Категории:</div>
              <li>
                <a href="/" className="categories__item">
                  Бытовая химия
                </a>
              </li>
              <li>
                <a href="/" className="categories__item">
                  Косметика и гигиена
                </a>
              </li>
              <li>
                <a href="/" className="categories__item">
                  Товары для дома
                </a>
              </li>
              <li>
                <a href="/" className="categories__item">
                  Товары для детей и мам
                </a>
              </li>
              <li>
                <a href="/" className="categories__item">
                  Посуда
                </a>
              </li>
            </ul>
            <div className="download">
              <div className="footer__title">Скачать прайс-лист:</div>
              <button className="download__btn btn">
                Прайс-лист
                <img src="pages/icons/Vector (1).png" alt="" />
              </button>
              <div className="download__social">
                <div>Связь в мессенджерах:</div>
                <div className="download__social-links">
                  <a href="/">
                    <img src="./pages/logos_telegram.png" alt="" />
                  </a>
                  <a href="/">
                    <img src="./pages/Group 162.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="footer__title">Контакты:</div>
              <div className="info_wrap">
                <a href="77774900091" className="info__number">
                  +7 (777) 490-00-91
                </a>
                <p className="info__time">время работы: 9:00-20:00</p>
                <a href="/" className="info__order-link">
                  Заказать звонок
                </a>
              </div>
              <div className="contacts__email">
                <span>opt.sultan@mail.ru</span>
                <p>На связи в любое время</p>
              </div>
              <div className="cards">
                <img src="./pages/Visa.png" alt="" />
                <img src="./pages/Visa (1).png" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
