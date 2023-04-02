import React from "react";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";


import ItemBlock from "../components/ItemBlock";
import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import Pagination from "../components/Pagination";


import { RootState, useAppDispatch } from "../redux/store";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/filter/slice";
import { fetchItems } from "../redux/item/asyncActions";
import { SearchItemParams } from "../redux/item/types";

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state: RootState) => state.filter
  );
  const items = useSelector((state: RootState) => state.item.items);
  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getItems = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(
      fetchItems({
        sortBy,
        order,
        currentPage: String(currentPage),
        categoryId: String(categoryId),
      })
    );
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchItemParams;

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortBy
      );

      dispatch(
        setFilters({
          categoryId: Number(params.categoryId),
          currentPage: Number(params.currentPage),
          sort:  sort || sortList[0],
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      getItems();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  React.useEffect(() => {
    getItems();
  }, [categoryId, sort.sortProperty, currentPage]);

  return (
    <>
     <Link className="main-link" to='/'>Каталог</Link>
      <h1 className="title">Косметика и гигиена</h1>
      <Sort />
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <div className="main-body">
        <div className="side-bar">
          <h3 className="side-bar__title">ПОДБОР ПО ПАРАМЕТРАМ</h3>
          <div className="side-bar__price">Цена</div>
          <div className="side-bar__manufacturer">Производитель</div>
          <div className="side-bar__filter">Уход за телом</div>
        </div>
        <div className="content">
          <div className="content__items">
            {items.map((obj: any) => (
              <ItemBlock key={obj.id} {...obj} />
            ))}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
          <span className="content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis. Faucibus consectetur
            aliquet sed pellentesque consequat consectetur congue mauris
            venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.
          </span>
        </div>
      </div>
    </>
  );
};

export default Catalog;
